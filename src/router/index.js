import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
/* 公共部分 */
import Footers from '@/components/public/Footers'
import Paging from '@/components/public/Paging'

/* 主页开始, */
import Index from '@/components/index/Index'
import Tables from '@/components/index/Tables'
import TaskList from '@/components/index/TaskList'
import Hall from '@/components/index/Hall' 

import Test from '@/components/index/Test' 

import DefaultAddress from '@/components/index/DefaultAddress'
import AddNewAddress from '@/components/index/AddNewAddress'
import OrderDetails from '@/components/index/OrderDetails'
import SmallTask from '@/components/index/SmallTask'
/* 主页结束 */

//小任务
import ReleaseTraffic from '@/components/index/small/ReleaseTraffic'
import ReleaseGoods from '@/components/index/small/ReleaseGoods'
import ReleaseStoreCollection from '@/components/index/small/ReleaseStoreCollection'
import ReleaseSecondKill from '@/components/index/small/ReleaseSecondKill'
import CodeNum from '@/components/index/small/CodeNum'//发布商品表格
import StoreCollection from '@/components/index/small/StoreCollection'//店铺收藏表格 
import SecondKill from '@/components/index/small/SecondKill'//店铺收藏表格 

//任务进度
import TaskSchedule from '@/components/index/taskSchedule/TaskSchedule' 
import TaskScheduleTable from '@/components/index/taskSchedule/TaskScheduleTable' //任务进度表格
import ViewDetails from '@/components/index/taskSchedule/ViewDetails' //任务进度详情
import ViewDetailTable from '@/components/index/taskSchedule/ViewDetailTable' //任务详情表格

//收货管理页面
import ReceiptsManagement from '@/components/index/receiptsManagement/ReceiptsManagement' //收货管理页面
import ReceiptsManagementTable from '@/components/index/receiptsManagement/ReceiptsManagementTable' //收货管理页面表格
import ManageGood from '@/components/index/receiptsManagement/ManageGood' //管理收货页面

// 财务区开始
import Recharge from '@/components/index/finance/Recharge' //充值
import RechargeDetail from '@/components/index/finance/RechargeDetail' //充值明细
import BillDetail from '@/components/index/finance/BillDetail'  //账单明细
import BillDetailTable from '@/components/index/finance/BillDetailTable' //账单明细表格
import Application from '@/components/index/finance/Application' //申请提现
 
//账户信息
import ChangePassword from '@/components/index/accountInformation/ChangePassword' //修改密码
import ChangePaymentPassword from '@/components/index/accountInformation/ChangePaymentPassword' //修改支付密码



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      // 财务区开始
      path: '/finance/Recharge',
      component: Recharge
    },
    {
      //主页开始
      path: '/index/index',
      component: Index,
      children: [{
          path: '/index/Hall',
          component: Hall
        },
        {
          path: '/index/SmallTask',
          component: SmallTask,
          children: [{
            path: '/index/small/ReleaseTraffic',//发布流量
            component: ReleaseTraffic
          },{
            path: '/index/small/ReleaseGoods',//发布商品关注
            component: ReleaseGoods
          },{
            path: '/index/small/ReleaseStoreCollection',//发布店铺收藏
            component: ReleaseStoreCollection
          },{
            path: '/index/small/ReleaseSecondKill',//发布手机秒杀
            component: ReleaseSecondKill
          },{
            path: '/index/small/CodeNum',//任务编号表格
            component: CodeNum
          },{
            path: '/index/small/StoreCollection',//店铺收藏表格
            component: StoreCollection
          },{
            path: '/index/small/SecondKill',//手机秒杀表格
            component: SecondKill
          }],
        },
        {
          path: '/index/taskSchedule/TaskSchedule', //任务进度
          component: TaskSchedule,
          children:[{
            path: '/index/taskSchedule/TaskScheduleTable', //任务进度表格
            component: TaskScheduleTable,
          },{
            path: '/index/taskSchedule/ViewDetailTable', //任务详情表格
            component: ViewDetailTable,
          }]
        },{
          path: '/index/taskSchedule/ViewDetails', //任务进度详情
          component: ViewDetails,
        },
        {
          path: '/index/receiptsManagement/ReceiptsManagement', //收货管理页面
          component: ReceiptsManagement,
          children:[{
            path: '/index/receiptsManagement/ReceiptsManagementTable', //收货管理表格页面
            component: ReceiptsManagementTable,
          }
          ]
        },
        {
          path: '/index/receiptsManagement/ManageGood', //管理收货页面
          component: ManageGood,
        },
        {
          path: '/index/TaskList',
          component: TaskList
        },
        {
          path: '/index/OrderDetails',
          component: OrderDetails
        },
        {
          path: '/index/Test',
          component: Test
        },
        {
          path: '/index/Tables',
          component: Tables
        },
        {
          path: '/index/AddNewAddress',
          component: AddNewAddress
        },
        {
          path: '/index/DefaultAddress',
          component: DefaultAddress
        },
        {
          // 财务区开始---充值
          path: '/index/finance/Recharge',
          component: Recharge
        },
        {
          // 财务区开始---充值明细
          path: '/index/finance/RechargeDetail',
          component: RechargeDetail
        },
        {
          // 财务区开始---账单明细
          path: '/index/finance/BillDetail',
          component: BillDetail
        },
        {
          // 财务区开始---账单明细表格
          path: '/index/finance/BillDetailTable',
          component: BillDetailTable
        },
        {
          // 财务区开始---申请提现
          path: '/index/finance/Application',
          component: Application
        },
        {
          // 个人信息---修改密码
          path: '/index/accountInformation/ChangePassword',
          component: ChangePassword
        },
        {
          // 个人信息---修改支付密码
          path: '/index/accountInformation/ChangePaymentPassword',
          component: ChangePaymentPassword
        },
      ]
    },{
      path: '/public',
      name: 'Headers',
      component: Headers
    },
    {
      path: '/public',
      name: 'Footers',
      component: Footers
    },
    {
      path: '/public',
      name: 'Paging',
      component: Paging
    }
  ]
})
