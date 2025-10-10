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
              <el-menu-item index="2-1-1" class="active-menu-item">
                <el-icon><CircleCheck /></el-icon>
                <span>稽核规则运算</span>
              </el-menu-item>
              <el-menu-item index="2-1-2">
                <RouterLink to="/audit-rule-library">
                  <el-icon><Grid /></el-icon>
                  <span>稽核规则库</span>
                </RouterLink>
              </el-menu-item>
              <el-menu-item index="2-1-3">
                <RouterLink to="/financial-data-analysis">
                  <el-icon><Grid /></el-icon>
                  <span>财务数据分析统计</span>
                </RouterLink>
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
          <el-breadcrumb-item>稽核规则运算</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 筛选区域 -->
        <div class="filter-section">
          <div class="filter-controls">
            <div class="filter-item">
              <label>时间:</label>
              <el-date-picker
                v-model="timeRange"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
              />
            </div>
            <div class="filter-item">
              <label>单位:</label>
              <el-select v-model="selectedUnit" placeholder="请选择单位" size="default" class="select-item">
                <el-option label="XX中心" value="xx-center" />
                <el-option label="XX市气象局" value="xx-bureau" />
              </el-select>
            </div>
            <div class="filter-item">
              <label>稽核规则:</label>
              <el-select v-model="selectedRule" placeholder="请选择稽核规则" size="default" class="select-item">
                <el-option label="账务处理规则" value="accounting" />
                <el-option label="预算管理规则" value="budget" />
              </el-select>
            </div>
          </div>
          <div class="action-buttons">
            <el-button type="primary" @click="handleImport">
              <el-icon><Upload /></el-icon>
              导入
            </el-button>
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>
              查询
            </el-button>
            <el-button type="primary" @click="handleExport">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
          </div>
        </div>

        <!-- 数据表格 -->
        <el-table :data="tableData" class="data-table" border>   
            <el-table-column prop="unit" label="单位" width="200" />
          <el-table-column prop="rule" label="稽核规则" min-width="400" />
          <el-table-column prop="result" label="稽核结果" min-width="300" />
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
  Upload,
  Search,
  Download
} from '@element-plus/icons-vue'
import { exportToExcel, formatTableDataForExport } from '../utils/excelExport'
import { ElMessage } from 'element-plus'

// 响应式数据
const activeMenu = ref('2-1-1')
const timeRange = ref<[Date, Date] | null>(null)
const selectedUnit = ref('')
const selectedRule = ref('')

// 表格数据
const tableData = ref([
  {
    unit: 'XX中心',
    rule: '账务处理:100201银行存款与基本账户存款与80010202货币资金-银行存款一致性比对',
    result: '"100201"=56398, "80010202"=57429; 56398-57429=-1031, false'
  },
  {
    unit: 'XX市气象局',
    rule: '预算管理:中央财政项目收入与预算控制数一致性比对',
    result: '"252020020203, 6001"=520000, "控制数,252020020203"=550000, 520000-550000=-30000, false'
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
    const exportData = formatTableDataForExport(tableData.value)
    
    // 生成文件名（包含时间戳）
    const now = new Date()
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_')
    const filename = `稽核规则运算结果_${timestamp}`
    
    // 导出Excel
    const success = exportToExcel(exportData, filename, '稽核结果')
    
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

// 查询功能
const handleSearch = () => {
  ElMessage.info('查询功能开发中...')
}

// 导入功能
const handleImport = () => {
  ElMessage.info('导入功能开发中...')
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
