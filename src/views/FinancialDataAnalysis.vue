<template>
  <el-container class="layout-container">
    <!-- 顶部头部 -->
    <el-header class="header">
      <div class="header-title">计财业务一体化平台</div>
    </el-header>

    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="250px" class="sidebar">
        <el-menu
          :default-active="activeMenu"
          class="sidebar-menu"
          background-color="#f5f5f5"
          text-color="#333"
          active-text-color="#409EFF"
        >
          <!-- 预算全过程质量管理平台 -->
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>预算全过程质量管理平台</span>
            </template>
            <el-sub-menu index="1-1">
              <template #title>
                <el-icon><Grid /></el-icon>
                <span>预算编制</span>
              </template>
              <el-sub-menu index="1-1-1">
                <template #title>
                  <el-icon><Grid /></el-icon>
                  <span>人员经费测算</span>
                </template>
                <el-menu-item index="1-1-1-1">
                  <el-icon><Location /></el-icon>
                  <span>标准工资表编制</span>
                </el-menu-item>
                <el-menu-item index="1-1-1-2">
                  <el-icon><Grid /></el-icon>
                  <span>人员经费需求草案生成</span>
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item index="1-1-2">
                <el-icon><Grid /></el-icon>
                <span>人员经费资金分配</span>
              </el-menu-item>
              <el-menu-item index="1-1-3">
                <el-icon><Grid /></el-icon>
                <span>三级单位控制数</span>
              </el-menu-item>
              <el-menu-item index="1-1-4">
                <el-icon><Grid /></el-icon>
                <span>二级部门控制数</span>
              </el-menu-item>
              <el-menu-item index="1-1-5">
                <el-icon><Grid /></el-icon>
                <span>二级部门汇总查询</span>
              </el-menu-item>
              <el-menu-item index="1-1-6">
                <el-icon><Grid /></el-icon>
                <span>人事工资标准维护</span>
              </el-menu-item>
              <el-sub-menu index="1-1-7">
                <template #title>
                  <el-icon><Grid /></el-icon>
                  <span>预算审核</span>
                </template>
                <el-menu-item index="1-1-7-1">
                  <el-icon><CircleCheck /></el-icon>
                  <span>预算审核流程</span>
                </el-menu-item>
                <el-menu-item index="1-1-7-2">
                  <el-icon><CircleCheck /></el-icon>
                  <span>审核结果查询</span>
                </el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-sub-menu>

          <!-- 财务工作质量管理平台 -->
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>财务工作质量管理平台</span>
            </template>
            <el-sub-menu index="2-1">
              <template #title>
                <el-icon><Grid /></el-icon>
                <span>质量监管</span>
              </template>
              <el-menu-item index="2-1-1">
                <RouterLink to="/">
                  <el-icon><CircleCheck /></el-icon>
                  <span>稽核规则运算</span>
                </RouterLink>

              </el-menu-item>
              <el-menu-item index="2-1-2">
                <RouterLink to="/audit-rule-library">
                  <el-icon><Grid /></el-icon>
                  <span>稽核规则库</span>
                </RouterLink>
              </el-menu-item>
              <el-menu-item index="2-1-3" class="active-menu-item">
                <el-icon><CircleCheck /></el-icon>
                <span>财务数据分析统计</span>
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主内容区 -->
      <el-main class="main-content">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item>
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>财务数据分析统计</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 标签页 -->
        <el-tabs v-model="activeTab" class="content-tabs">
          <el-tab-pane label="首页" name="home">
            <template #label>
              <el-icon><CircleCheck /></el-icon>
              <span>首页</span>
            </template>
          </el-tab-pane>
          <el-tab-pane label="财务数据分析统计" name="data-analysis">
            <template #label>
              <el-icon><CircleCheck /></el-icon>
              <span>财务数据分析统计</span>
            </template>
          </el-tab-pane>
        </el-tabs>

        <!-- 筛选区域 -->
        <div class="filter-section">
          <div class="filter-controls">
            <div class="filter-item">
              <label>查询方案:</label>
              <el-select v-model="selectedPlan" placeholder="请选择查询方案" size="default" class="select-item">
                <el-option label="方案一" value="plan1" />
                <el-option label="方案二" value="plan2" />
                <el-option label="方案三" value="plan3" />
              </el-select>
            </div>
            <div class="filter-item">
              <label>单位:</label>
              <el-select v-model="selectedUnit" placeholder="请选择单位" size="default" class="select-item">
                <el-option label="XX中心" value="xx-center" />
                <el-option label="XX市气象局" value="xx-bureau" />
                <el-option label="XX分局" value="xx-branch" />
              </el-select>
            </div>
          </div>
          <div class="action-buttons">
            <el-button type="primary" @click="handleAddPlan">
              <el-icon><Plus /></el-icon>
              新增查询方案
            </el-button>
            <el-button type="primary" @click="handleRetrieveData">
              <el-icon><Link /></el-icon>
              取数
            </el-button>
            <el-button type="primary" @click="handleExport">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
          </div>
        </div>

        <!-- 页面标题 -->
        <div class="page-title-section">
          <h2 class="page-title">报表标题</h2>
        </div>

        <!-- 数据表格 -->
        <el-table :data="tableData" class="data-table" border stripe :header-cell-style="{background:'#eef1f6',color:'#606266'}">
          <el-table-column prop="unit" label="单位" width="150" align="center"/>
          <el-table-column prop="customItem1" label="自定义报表项一" min-width="200" align="center">
            <template #header>
              <span>自定义报表项一</span>
              <!-- <el-icon class="pin-icon"><LocationFilled /></el-icon> -->
            </template>
          </el-table-column>
          <el-table-column prop="customItem2" label="自定义报表项二" min-width="200" align="center">
            <template #header>
              <span>自定义报表项二</span>
              <!-- <el-icon class="pin-icon"><LocationFilled /></el-icon> -->
            </template>
          </el-table-column>
          <el-table-column prop="customItem3" label="自定义报表项三" min-width="200" align="center">
            <!-- <template #header>
              <span>自定义报表项</span> -->
              <!-- <el-icon class="pin-icon"><LocationFilled /></el-icon> -->
            <!-- </template> -->
          </el-table-column>
          <el-table-column prop="more" label="......" min-width="150" align="center">
            <template #header>
              <span>......</span>
              <span style="font-size: smaller;"> 更多数据</span>
              <!-- <el-icon class="pin-icon"><LocationFilled /></el-icon> -->
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Grid,
  Location,
  CircleCheck,
  House,
  Plus,
  Link,
  Download,
  LocationFilled
} from '@element-plus/icons-vue'
import { exportToExcel, formatFinancialDataAnalysisForExport } from '../utils/excelExport'
import { ElMessage } from 'element-plus'

// 响应式数据
const activeMenu = ref('2-1-3')
const activeTab = ref('data-analysis')
const selectedPlan = ref('')
const selectedUnit = ref('')

// 表格数据
const tableData = ref([
  {
    unit: 'XX中心',
    customItem1: '100000',
    customItem2: '200000',
    customItem3: '300000',
    more: '...'
  },
  {
    unit: 'XX市气象局',
    customItem1: '150000',
    customItem2: '250000',
    customItem3: '350000',
    more: '...'
  },
  {
    unit: 'XX分局',
    customItem1: '80000',
    customItem2: '180000',
    customItem3: '280000',
    more: '...'
  },
  {
    unit: 'XX站',
    customItem1: '120000',
    customItem2: '220000',
    customItem3: '320000',
    more: '...'
  },
  {
    unit: 'XX台',
    customItem1: '90000',
    customItem2: '190000',
    customItem3: '290000',
    more: '...'
  }
])

// 导出Excel功能
const handleExport = () => {
  try {
    if (tableData.value.length === 0) {
      ElMessage.warning('没有数据可以导出')
      return
    }
    
    // 格式化数据
    const exportData = formatFinancialDataAnalysisForExport(tableData.value)
    
    // 生成文件名（包含时间戳）
    const now = new Date()
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_')
    const filename = `财务数据分析统计_${timestamp}`
    
    // 导出Excel
    const success = exportToExcel(exportData, filename, '财务数据分析统计')
    
    if (success) {
      ElMessage.success('导出成功！')
    } else {
      ElMessage.error('导出失败，请重试')
    }
  } catch (error) {
    console.error('导出失败:', error)
    ElMessage.error('导出失败，请检查数据格式')
  }
}

// 新增查询方案
const handleAddPlan = () => {
  ElMessage.info('新增查询方案功能开发中...')
}

// 取数功能
const handleRetrieveData = () => {
  ElMessage.info('取数功能开发中...')
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #409EFF;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
}

.sidebar {
  background-color: #f5f5f5;
  border-right: 1px solid #e4e7ed;
  height: calc(100vh - 60px);
}

.sidebar-menu {
  border-right: none;
  height: 100%;
}

.active-menu-item {
  background-color: #409EFF !important;
  color: white !important;
}

.main-content {
  background-color: white;
  padding: 20px;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

.breadcrumb {
  margin-bottom: 20px;
}

.content-tabs {
  margin-bottom: 20px;
}

.content-tabs :deep(.el-tabs__item.is-active) {
  color: #409EFF;
}

.content-tabs :deep(.el-tabs__active-bar) {
  background-color: #409EFF;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.filter-controls {
  display: flex;
  gap: 20px;
  align-items: center;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-item label {
  font-weight: 500;
  color: #333;
  white-space: nowrap;
}

.select-item {
  width: 150px;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.page-title-section {
  text-align: center;
  margin-bottom: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.data-table {
  width: 100%;
}

.data-table :deep(.el-table__header) {
  background-color: #f5f7fa;
}

.data-table :deep(.el-table th) {
  background-color: #f5f7fa;
  color: #333;
  font-weight: 600;
}

.data-table :deep(.el-table td) {
  padding: 12px 0;
}

.pin-icon {
  color: #f56c6c;
  margin-left: 5px;
}

.table-note {
  margin-top: 10px;
  text-align: center;
  color: #666;
  font-size: 14px;
}

.table-note p {
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
    gap: 15px;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .action-buttons {
    width: 100%;
    justify-content: center;
  }
}
</style>
