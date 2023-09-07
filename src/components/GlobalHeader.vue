<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" />
            <div class="title">Yang OJ</div>
          </div>
        </a-menu-item>
        <!-- 遍历router，router的name为菜单项，路径为key -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="70px">
      <div class="avatar">
        <a-dropdown>
          <a-avatar :image-url="avatar || ''" />
          <template #content>
            <a-doption>
              <template #icon>
                <icon-location />
              </template>
              <template #default>个人中心</template>
            </a-doption>
            <a-doption @click="handlerLoginOut">
              <template #icon>
                <icon-location />
              </template>
              <template #default>退出登录</template>
            </a-doption>
          </template>
        </a-dropdown>
      </div>
      <div class="avatar-name">
        <a>
          {{ name ?? "" }}
        </a>
      </div>
    </a-col>
  </a-row>
</template>

<!--事件-->
<script setup lang="ts">
//vue3的写法<script setup lang="ts">
//引入路由文件
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import useState from "@arco-design/web-vue/es/_hooks/use-state";
import { UserControllerService } from "../../generated";
//官方组件，路由转跳
const router = useRouter();
//获取状态变量
const store = useStore();
const [avatar, setAvatar] = useState<any>("");
const [name, setName] = useState<any>("");

// 展示在菜单的路由数组
// 动态展示变量的值computed,值改变了页面会重新渲染
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    //根据路由的配置。获取hideInMenu的值判断是否过滤
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单,获取全局状态，用户的信息，取出登录用户的角色
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    setAvatar(store.state.user.loginUser.userAvatar);
    setName(store.state.user.loginUser.userName);
    return true;
  });
});

// 默认主页, selectedKeys及为路由
const selectedKeys = ref(["/"]);

// 路由跳转后，更新选中的菜单项,刷新后，记忆当前高亮的菜单项,刷新后跳转当前路由
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//点击事件，点击菜单后跳转到对应的路由,传进来的是一个key,key即为路由path
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

const handlerLoginOut = () => {
  //如果已登录才能退出登陆
  if (store.state.user.loginUser.id) {
    UserControllerService.userLogoutUsingPost();
    router.push("/user/login");
  }
};
</script>

<!--css样式-->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.avatar {
  margin-top: 5px;
}

.avatar-name {
  margin-top: 5px;
  width: auto;
}

.logo {
  height: 48px;
}
</style>
