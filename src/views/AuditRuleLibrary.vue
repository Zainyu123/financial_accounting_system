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
              <el-menu-item index="2-1-2" class="active-menu-item">
                <el-icon><Grid /></el-icon>
                <span>稽核规则库</span>
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
          <el-breadcrumb-item>稽核规则库</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 标签页 -->
        <!-- <el-tabs v-model="activeTab" class="content-tabs">
          <el-tab-pane label="首页" name="home">
            <template #label>
              <el-icon><CircleCheck /></el-icon>
              <span>首页</span>
            </template>
          </el-tab-pane>
          <el-tab-pane label="稽核规则库" name="audit-library">
            <template #label>
              <el-icon><Grid /></el-icon>
              <span>稽核规则库</span>
            </template>
          </el-tab-pane>
        </el-tabs> -->

        <!-- 筛选区域 -->
        <div class="filter-section">
          <div class="filter-controls">
            <div class="filter-item">
              <label>类型:</label>
              <el-select v-model="selectedType" placeholder="请选择类型" size="default" class="select-item">
                <el-option label="账务处理" value="accounting" />
                <el-option label="预算管理" value="budget" />
                <el-option label="资金管理" value="fund" />
              </el-select>
            </div>
          </div>
          <div class="action-buttons">
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>
              查询
            </el-button>
            <el-button type="primary" @click="dialogVisible = true">
              <el-icon><Plus /></el-icon>
              新增规则
            </el-button>
            <el-button type="primary" @click="handleExport">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
          </div>
        </div>

        <!-- 页面标题 -->
        <div class="page-title-section">
          <h2 class="page-title">稽核规则库</h2>
        </div>

        <!-- 数据表格 -->
        <el-table :data="tableData" class="data-table" stripe border :header-cell-style="{background:'#eef1f6',color:'#606266'}">
          <el-table-column prop="type" label="类型" width="150" align="center"/>
          <el-table-column prop="rule" label="稽核规则" min-width="400" align="center"/>
          <el-table-column prop="formula" label="规则公式" min-width="300" align="center"/>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

  <el-dialog v-model="dialogVisible" title="新增稽核规则" width="600px"> 
    <el-form v-model="form" :ref="formRef">
      <el-row :gutter="8">
        <el-col :span="12">
          <el-form-item label="规则类型">
            <el-input v-model="form.type" placeholder="请输入规则类型"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="稽核规则" >
            <el-input v-model=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Grid,
  Location,
  CircleCheck,
  House,
  Search,
  Download,
  Plus
} from '@element-plus/icons-vue'
import { exportToExcel, formatAuditRuleLibraryForExport } from '../utils/excelExport'
import { ElMessage, FormInstance } from 'element-plus'

// 响应式数据
const activeMenu = ref('2-1-2')
const activeTab = ref('audit-library')
const selectedType = ref('')
const dialogVisible = ref(false)

const form = ref({
  type: '',
  rule: '',
  formula: ''
})
const formRef = ref<FormInstance>();

// 表格数据
const tableData = ref([
  {
    type: '账务处理',
    rule: '100201银行存款与基本账户存款与80010202货币资金-银行存款一致性比对',
    formula: '100201=A, 80010202=B, if "A-B"≠0, false'
  },
  {
    type: '预算管理',
    rule: '中央财政项目收入与预算控制数一致性比对',
    formula: ''
  },
  {
    type: '账务处理',
    rule: '应收账款与预收账款余额一致性比对',
    formula: '1122=A, 2203=B, if "A-B"≠0, false'
  },
  {
    type: '预算管理',
    rule: '预算执行进度与计划进度一致性比对',
    formula: '实际执行=A, 计划进度=B, if "A-B"<0, false'
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
    const exportData = formatAuditRuleLibraryForExport(tableData.value)
    
    // 生成文件名（包含时间戳）
    const now = new Date()
    const timestamp = now.toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_')
    const filename = `稽核规则库_${timestamp}`
    
    // 导出Excel
    const success = exportToExcel(exportData, filename, '稽核规则库')
    
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
  width: 250px;
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
