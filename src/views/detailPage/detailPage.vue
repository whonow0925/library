<template>
  <div class="detailPage">
    <navigation></navigation>
    <div class="header">
      <img src="./images/header-image2.png" alt="" />
    </div>
    <div class="navigation">
      <a-card
        style="width:100%;padding-left:45px"
        :tab-list="tabListNoTitle"
        :active-tab-key="noTitleKey"
        @tabChange="key => onTabChange(key, 'noTitleKey')"
      >
        <p v-if="noTitleKey === '开放时间'">
          <span>
            <a-table :columns="columns" :data-source="data" bordered>
              <template slot="name" slot-scope="text">
                <a>{{ text }}</a>
              </template>
            </a-table>
          </span>
        </p>
        <p v-else-if="noTitleKey === '交通指南'">
          <span class="traffic">
            <img src="./images/traffic.jpg" alt="" />
          </span>
        </p>
        <p v-else-if="noTitleKey === '馆舍平面'">
          project content
        </p>
        <p v-else-if="noTitleKey === '办证须知'">
          project content
        </p>
        <p v-else-if="noTitleKey === '服务项目'">
          project content
        </p>
        <p v-else-if="noTitleKey === '外借规则'">
          project content
        </p>
        <p v-else-if="noTitleKey === '吉珠新闻'">
          project content
        </p>
        <p v-else-if="noTitleKey === '发展规划'">
          project content
        </p>
        <p v-else-if="noTitleKey === '媒体报道'">
          project content
        </p>
      </a-card>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/Navigation/navigation'
// import Navigation from '@/components/Navigation/navigation.vue'
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {}
  }
  // if (index === 4) {
  //   obj.attrs.colSpan = 0
  // }
  return obj
}

const data = [
  {
    key: '1',
    floor: '6F',
    functionalAreas: '报刊阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '2',
    floor: '6F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '3',
    floor: '5F',
    functionalAreas: '电子文献阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '4',
    floor: '5F',
    functionalAreas: '教师休息区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '5',
    floor: '5F',
    functionalAreas: '研讨间',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '6',
    floor: '5F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22: 30'
  },
  {
    key: '7',
    floor: '4F',
    functionalAreas: '人文社会科学图书阅览区（I-K类）',
    time: '星期一至星期六 08:30 - 22:00'
  },
  {
    key: '8',
    floor: '4F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期六 08:30 - 22:00'
  },
  {
    key: '9',
    floor: '3F',
    functionalAreas: '人文社会科学图书阅览区（A-H类）',
    time: '星期一至星期日 08:00 - 22:00'
  },
  {
    key: '10',
    floor: '3F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '11',
    floor: '2F',
    functionalAreas: '西文图书阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '12',
    floor: '2F',
    functionalAreas: '新书阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '13',
    floor: '2F',
    functionalAreas: '理工科图书阅览区（N-Z类）',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '14',
    floor: '2F',
    functionalAreas: '培训室和党员活动室',
    time: '星期一至星期五、星期日 08:30 - 17:00'
  },
  {
    key: '15',
    floor: '1F',
    functionalAreas: '总借还台',
    time: '星期一至星期六 09:30 - 19:30'
  },
  {
    key: '16',
    floor: '1F',
    functionalAreas: '自习区',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '17',
    floor: '1F',
    functionalAreas: '书目检索区',
    time: '星期一至星期日 07:00 - 22:30'
  }
]

export default {
  components: {
    navigation
  },
  data() {
    const columns = [
      {
        title: '楼层',
        dataIndex: 'floor',
        customRender: (text, row, index) => {
          if (index < 17) {
            return <a href="javascript:;">{text}</a>
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            attrs: {
              colSpan: 5
            }
          }
        }
      },
      {
        title: '功能区',
        dataIndex: 'functionalAreas',
        customRender: renderContent
      },
      {
        title: '开放时间',
        colSpan: 2,
        dataIndex: 'time',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          }
          // if (index === 2) {
          //   obj.attrs.rowSpan = 2
          // }
          // // These two are merged into above cell
          // if (index === 3) {
          //   obj.attrs.rowSpan = 0
          // }
          // if (index === 4) {
          //   obj.attrs.colSpan = 0
          // }
          return obj
        }
      }
    ]
    return {
      data,
      columns,
      tabListNoTitle: [
        {
          key: '开放时间',
          tab: '开放时间'
        },
        {
          key: '交通指南',
          tab: '交通指南'
        },
        {
          key: '馆舍平面',
          tab: '馆舍平面'
        },
        {
          key: '办证须知',
          tab: '办证须知'
        },
        {
          key: '服务项目',
          tab: '服务项目'
        },
        {
          key: '外借规则',
          tab: '外借规则'
        },
        {
          key: '吉珠新闻',
          tab: '吉珠新闻'
        },
        {
          key: '发展规划',
          tab: '发展规划'
        },
        {
          key: '媒体报道',
          tab: '媒体报道'
        }
      ],
      key: 'tab1',
      noTitleKey: 'app'
    }
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type)
      this[type] = key
    }
  }
}
</script>
Navigation

<style lang="less" scoped>
/* @import url('https://fonts.font.im/css?family=Hanalei+Fill'); */
.ant-card-head {
  display: flex;
  align-items: center;
  justify-content: center;
}
.detailPage {
  .header {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navigation {
    /* font-family: 'Hanalei Fill', cursive; */
  }
  .traffic {
    img{
      width: 400px;
      margin-left: 250px;
    }
  }
}
</style>
