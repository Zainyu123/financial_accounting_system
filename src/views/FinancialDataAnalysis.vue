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
        <!-- <el-tabs v-model="activeTab" class="content-tabs">
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
        </el-tabs> -->

        <!-- 筛选区域 -->
        <div class="filter-section">
          <div class="filter-controls">
            <div class="filter-item">
              <label>查询方案:</label>
              <el-select v-model="selectedPlan" placeholder="请选择查询方案" size="default" class="select-item" clearable="true">
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
            <!-- <el-button type="primary" @click="handleRetrieveData">
              <el-icon><Link /></el-icon>
              取数
            </el-button> -->
            <el-button type="primary" @click="handleExport">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
            <el-button type="primary" @click="resetTableData">
              <el-icon><Refresh /></el-icon>
              重置
            </el-button>
          </div>
        </div>

        <!-- 页面标题 -->
        <div class="page-title-section">
          <el-input
            v-model="reportTitle"
            class="page-title-input"
            placeholder="请输入报表标题"
            @input="handleTitleChange"
            clearable
          />
        </div>

        <!-- 数据表格 -->
        <div class="table-container">
          <el-table 
            :data="tableData" 
            class="data-table" 
            border 
            stripe 
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            style="width: 100%"
          >
            <el-table-column 
              v-for="header in dynamicHeaders" 
              :key="header.prop"
              :prop="header.prop" 
              :label="header.label" 
              :width="header.width"
              :min-width="header.minWidth"
              align="center"
            />
            <el-table-column 
              prop="finalResult" 
              label="最后结果" 
              width="150" 
              align="center"
              fixed="right"
            />
        </el-table>
        </div>
      </el-main>
    </el-container>

    <!-- 新增查询方案弹框 -->
    <el-dialog
      v-model="dialogVisible"
      title="新增查询方案"
      width="80%"
      :before-close="handleDialogClose"
    >
      <div class="condition-dialog">
        <!-- <div class="condition-title">条件自定义:</div> -->
        
        <!-- 取数时间设置 -->
        <el-row>
          <el-col :span="12">
            <div class="time-setting">
              <div class="time-item">
                <label>取数时间:</label>
                <el-date-picker
                  v-model="queryTimeRange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="YYYY-MM-DD"
                  value-format="YYYY-MM-DD"
                  class="time-picker"
                />
              </div>
            </div>
          </el-col>
        </el-row>

        
        <div class="rule-description">
          <el-alert
            title="规则说明"
            description="必须遵循：要素+运算+要素的模式，例如：科目+运算+项目"
            type="info"
            :closable="false"
            show-icon
          />
        </div>
        <div class="condition-container">
          <label style="font-weight: 500; color: #333; white-space: nowrap;">条件自定义:</label>
          <div 
            v-for="item in conditionItems" 
            :key="item.id" 
            class="condition-item"
          >
            <!-- 要素选择器 -->
            <div v-if="item.type === 'element'" class="element-selector">
              <div class="element-input-group">
                <el-cascader
                  v-model="item.value"
                  :options="cascaderOptions"
                  placeholder="要素"
                  clearable
                  class="cascader-input"
                />
                <el-input
                  v-model="item.customName"
                  placeholder="自定义表头名（必填）"
                  clearable
                  class="custom-name-input"
                  required
                />
              </div>
              <el-button 
                type="danger" 
                size="small" 
                circle 
                @click="removeConditionItem(item.id)"
                class="remove-btn"
              >
                <el-icon><Close /></el-icon>
              </el-button>
            </div>
            
            <!-- 运算选择器 -->
            <div v-if="item.type === 'operation'" class="operation-selector">
              <el-select
                v-model="item.value"
                placeholder="运算"
                clearable
                class="operation-input"
              >
                <el-option
                  v-for="option in operationOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
              <el-button 
                type="danger" 
                size="small" 
                circle 
                @click="removeConditionItem(item.id)"
                class="remove-btn"
              >
                <el-icon><Close /></el-icon>
              </el-button>
            </div>
          </div>
        </div>
        
        <!-- 添加按钮 -->
        <div class="add-buttons">
          <el-button type="primary" @click="addElement">
            <el-icon><Plus /></el-icon>
            添加运算+要素
          </el-button>
          <el-button type="success" @click="addOperationOnly">
            <el-icon><Plus /></el-icon>
            单独添加运算
          </el-button>
          <el-button type="warning" @click="addElementOnly">
            <el-icon><Plus /></el-icon>
            单独添加要素
          </el-button>
        </div>
      </div>
      
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm">保存</el-button>
        </div>
      </template>
    </el-dialog>
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
  Download,
  Close,
  Refresh
} from '@element-plus/icons-vue'
import { exportToExcel, formatFinancialDataAnalysisForExport } from '../utils/excelExport'
import { ElMessage } from 'element-plus'

// 表头类型定义
interface TableHeader {
  prop: string
  label: string
  width?: number
  minWidth?: number
}

// 响应式数据
const activeMenu = ref('2-1-3')
const selectedPlan = ref('')
const selectedUnit = ref('')

// 报表标题相关
const reportTitle = ref('报表标题')
const isTitleModified = ref(false)

// 弹框相关状态
const dialogVisible = ref(false)
const queryTimeRange = ref<[string, string] | null>(null)
const conditionItems = ref([
  { id: 1, type: 'element', value: null, customName: '' },
  { id: 2, type: 'operation', value: null, customName: '' },
  { id: 3, type: 'element', value: null, customName: '' }
])

// 动态表头
const dynamicHeaders = ref<TableHeader[]>([
  { prop: 'unit', label: '单位', width: 150 },
  { prop: 'customFormItem', label: '自定义表单项', width: 150 }
])

// 获取要素标签的函数
const getElementLabel = (value: any) => {
  if (!value || !Array.isArray(value) || value.length === 0) return ''
  
  // 根据级联选择器的值获取对应的标签
  const findLabel = (options: any[], targetValue: any, level = 0): string => {
    for (const option of options) {
      if (option.value === targetValue) {
        return option.label
      }
      if (option.children && level < value.length - 1) {
        const childLabel = findLabel(option.children, value[level + 1], level + 1)
        if (childLabel) {
          return level === 0 ? `${option.label}-${childLabel}` : childLabel
        }
      }
    }
    return ''
  }
  
  return findLabel(cascaderOptions.value, value[0])
}

// 运算选项
const operationOptions = [
  { label: '+', value: '+' },
  { label: '-', value: '-' },
  { label: '*', value: '*' },
  { label: '/', value: '/' },
  { label: '或', value: 'or' },
  { label: '且', value: 'and' },
  { label: '(空)', value: null }
]

// 要素级联选择器选项
const cascaderOptions = ref([
  {
    value: 'subject',
    label: '科目',
    children: [
      {
        value: 'asset',
        label: '1资产',
        children: [
          { value: '1002', label: '1002' },
          { value: '100201', label: '100201' }
        ]
      },
      {
        value: 'liability',
        label: '2负债',
        children: [
          { value: '1011', label: '1011' },
          { value: '101101', label: '101101' },
          { value: '101102', label: '101102' }
        ]
      },
      {
        value: 'netAsset',
        label: '3净资产',
        children: [
          { value: '1021', label: '1021' }
        ]
      },
      {
        value: 'financialIncome',
        label: '4财务收入',
        children: [
          { value: '1031', label: '1031' }
        ]
      },
      {
        value: 'financialExpense',
        label: '5财务费用',
        children: [
          { value: '1041', label: '1041' }
        ]
      },
      {
        value: 'budgetIncome',
        label: '6预算收入',
        children: [
          { value: '1051', label: '1051' }
        ]
      },
      {
        value: 'budgetExpense',
        label: '7预算支出',
        children: [
          { value: '1061', label: '1061' }
        ]
      },
      {
        value: 'budgetSurplus',
        label: '8预算结余',
        children: [
          { value: '1071', label: '1071' }
        ]
      }
    ]
  },
  {
    value: 'project',
    label: '项目',
    children: [
      {
        value: 'project1',
        label: '项目1',
        children: [
          { value: '2001', label: '2001' }
        ]
      }
    ]
  },
  {
    value: 'fundSource',
    label: '资金来源',
    children: [
      {
        value: 'fund1',
        label: '资金来源1',
        children: [
          { value: '3001', label: '3001' }
        ]
      }
    ]
  },
  {
    value: 'functional',
    label: '功能分类',
    children: [
      {
        value: 'func1',
        label: '功能分类1',
        children: [
          { value: '4001', label: '4001' }
        ]
      }
    ]
  },
  {
    value: 'control',
    label: '控制数',
    children: [
      {
        value: 'control1',
        label: '控制数1',
        children: [
          { value: '5001', label: '5001' }
        ]
      }
    ]
  }
])

// 表格数据
const tableData = ref([
  { unit: 'XX中心', customFormItem: '...', finalResult: '0' },
  { unit: 'XX市气象局', customFormItem: '...', finalResult: '0' },
  { unit: 'XX分局', customFormItem: '...', finalResult: '0' },
  { unit: 'XX站', customFormItem: '...', finalResult: '0' },
  { unit: 'XX台', customFormItem: '...', finalResult: '0' }
])

const resetTableData = () => {
  tableData.value = [];
}

// 导出Excel功能
const handleExport = () => {
  try {
    if (tableData.value.length === 0) {
      ElMessage.warning('没有数据可以导出')
      return
    }
    
    // 格式化数据
    const exportData = formatFinancialDataAnalysisForExport(tableData.value)
    
    // 生成文件名和表名
    let filename: string
    let sheetName: string
    
    const trimmedTitle = reportTitle.value.trim()
    
    if (isTitleModified.value && trimmedTitle && trimmedTitle !== '报表标题') {
      // 如果标题被修改且不为空且不是默认值，使用修改后的标题
      const cleanTitle = trimmedTitle.replace(/[<>:"/\\|?*]/g, '_')
      filename = cleanTitle
      sheetName = cleanTitle
    } else {
      // 否则使用默认命名规则（包括：未修改、为空、为空格、为默认值"报表标题"）
      const now = new Date()
      const timestamp = now.toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_')
      filename = `财务数据分析统计_${timestamp}`
      sheetName = '财务数据分析统计'
    }
    
    // 导出Excel
    const success = exportToExcel(exportData, filename, sheetName)
    
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
  dialogVisible.value = true
}

// 验证规则完整性
const validateRule = () => {
  const elements = conditionItems.value.filter(item => item.type === 'element')
  const operations = conditionItems.value.filter(item => item.type === 'operation')
  
  // 检查是否遵循 要素+运算+要素 的模式
  if (elements.length < 2) {
    return { valid: false, message: '至少需要两个要素' }
  }
  
  if (operations.length !== elements.length - 1) {
    return { valid: false, message: '运算数量必须比要素数量少1个' }
  }
  
  // 检查排列顺序是否正确
  for (let i = 0; i < conditionItems.value.length; i++) {
    const item = conditionItems.value[i]
    if (!item) continue
    
    if (i % 2 === 0 && item.type !== 'element') {
      return { valid: false, message: '规则必须遵循：要素+运算+要素的模式' }
    }
    if (i % 2 === 1 && item.type !== 'operation') {
      return { valid: false, message: '规则必须遵循：要素+运算+要素的模式' }
    }
  }
  
  return { valid: true, message: '' }
}

// 验证规则完整性（宽松模式，用于单独添加）
const validateRuleLoose = () => {
  const elements = conditionItems.value.filter(item => item.type === 'element')
  
  // 宽松验证：至少有一个要素
  if (elements.length < 1) {
    return { valid: false, message: '至少需要一个要素' }
  }
  
  return { valid: true, message: '' }
}

// 添加要素
const addElement = () => {
  const validation = validateRule()
  if (!validation.valid) {
    ElMessage.warning(validation.message)
    return
  }
  
  const newId = Math.max(...conditionItems.value.map(item => item.id)) + 1
  
  // 先添加运算
  conditionItems.value.push({ id: newId, type: 'operation', value: null, customName: '' })
  
  // 再添加要素
  const elementId = newId + 1
  conditionItems.value.push({ id: elementId, type: 'element', value: null, customName: '' })
}

// 单独添加运算
const addOperationOnly = () => {
  const validation = validateRuleLoose()
  if (!validation.valid) {
    ElMessage.warning(validation.message)
    return
  }
  
  const newId = Math.max(...conditionItems.value.map(item => item.id)) + 1
  conditionItems.value.push({ id: newId, type: 'operation', value: null, customName: '' })
}

// 单独添加要素
const addElementOnly = () => {
  const validation = validateRuleLoose()
  if (!validation.valid) {
    ElMessage.warning(validation.message)
    return
  }
  
  const newId = Math.max(...conditionItems.value.map(item => item.id)) + 1
  conditionItems.value.push({ id: newId, type: 'element', value: null, customName: '' })
}


// 删除条件项
const removeConditionItem = (id: number) => {
  const index = conditionItems.value.findIndex(item => item.id === id)
  if (index > -1) {
    const item = conditionItems.value[index]
    if (!item) return
    
    // 如果是删除要素，需要同时删除对应的运算
    if (item.type === 'element') {
      // 找到下一个运算并删除
      const nextOperationIndex = conditionItems.value.findIndex((nextItem, nextIndex) => 
        nextIndex > index && nextItem.type === 'operation'
      )
      if (nextOperationIndex > -1) {
        conditionItems.value.splice(nextOperationIndex, 1)
      }
    }
    
    // 如果是删除运算，需要同时删除下一个要素
    if (item.type === 'operation') {
      // 找到下一个要素并删除
      const nextElementIndex = conditionItems.value.findIndex((nextItem, nextIndex) => 
        nextIndex > index && nextItem.type === 'element'
      )
      if (nextElementIndex > -1) {
        conditionItems.value.splice(nextElementIndex, 1)
      }
    }
    
    // 删除当前项
    conditionItems.value.splice(index, 1)
    
    // 确保至少保留一个要素
    const remainingElements = conditionItems.value.filter(item => item.type === 'element')
    if (remainingElements.length === 0) {
      conditionItems.value.push({ id: Math.max(...conditionItems.value.map(item => item.id)) + 1, type: 'element', value: null, customName: '' })
    }
  }
}

// 更新表头
const updateTableHeaders = () => {
  const elementItems = conditionItems.value.filter(item => item.type === 'element' && item.value)
  
  // 重置表头，保留单位列
  dynamicHeaders.value = [
    { prop: 'unit', label: '单位', width: 150 }
  ]
  
  // 添加选择的要素作为表头
  elementItems.forEach((item) => {
    // 优先使用自定义名称，如果没有则使用要素标签
    const label = item.customName || getElementLabel(item.value)
    if (label) {
      dynamicHeaders.value.push({
        prop: `element_${item.id}`,
        label: label,
        minWidth: 200
      })
    }
  })
  
  // 更新表格数据
  updateTableData()
}

// 更新表格数据
const updateTableData = () => {
  const elementItems = conditionItems.value.filter(item => item.type === 'element' && item.value)
  
  tableData.value = tableData.value.map(row => {
    const newRow: any = { unit: row.unit, customFormItem: '...', finalResult: '0' }
    
    elementItems.forEach((item, index) => {
      newRow[`element_${item.id}`] = `${(index + 1) * 100000 + Math.floor(Math.random() * 50000)}`
    })
    
    return newRow
  })
}

// 确认保存
const handleConfirm = () => {
  // 验证取数时间范围
  if (!queryTimeRange.value || queryTimeRange.value.length !== 2) {
    ElMessage.error('请选择取数时间范围')
    return
  }
  
  // 验证规则
  const validation = validateRule()
  if (!validation.valid) {
    ElMessage.error(validation.message)
    return
  }
  
  // 检查是否所有要素都已选择
  const unselectedElements = conditionItems.value.filter(item => 
    item.type === 'element' && !item.value
  )
  if (unselectedElements.length > 0) {
    ElMessage.error('请为所有要素选择具体值')
    return
  }
  
  // 检查是否所有运算都已选择
  const unselectedOperations = conditionItems.value.filter(item => 
    item.type === 'operation' && !item.value
  )
  if (unselectedOperations.length > 0) {
    ElMessage.error('请为所有运算选择具体符号')
    return
  }
  
  // 检查是否所有要素的自定义表头名都已填写
  const emptyCustomNames = conditionItems.value.filter(item => 
    item.type === 'element' && !item.customName.trim()
  )
  if (emptyCustomNames.length > 0) {
    ElMessage.error('请为所有要素填写自定义表头名')
    return
  }
  
  updateTableHeaders()
  ElMessage.success('查询方案保存成功！')
  dialogVisible.value = false
}

// 重置弹框状态
const resetDialog = () => {
  queryTimeRange.value = null
  conditionItems.value = [
    { id: 1, type: 'element', value: null, customName: '' },
    { id: 2, type: 'operation', value: null, customName: '' },
    { id: 3, type: 'element', value: null, customName: '' }
  ]
}

// 弹框关闭处理
const handleDialogClose = (done: () => void) => {
  resetDialog()
  done()
}

// 取消
const handleCancel = () => {
  resetDialog()
  dialogVisible.value = false
}

// 标题修改处理
const handleTitleChange = () => {
  isTitleModified.value = true
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

.page-title-input {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.page-title-input :deep(.el-input__inner) {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  border: none;
  background: transparent;
  box-shadow: none;
  padding: 0;
}

.page-title-input :deep(.el-input__inner):focus {
  border: 1px solid #409EFF;
  background: white;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

.data-table {
  width: 100%;
  min-width: 100%;
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

/* 弹框样式 */
.condition-dialog {
  padding: 20px;
}

.condition-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.time-setting {
  margin-bottom: 20px;
}

.time-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.time-item label {
  font-weight: 500;
  color: #333;
  white-space: nowrap;
}

.time-picker {
  width: 300px;
}

.rule-description {
  margin-bottom: 20px;
}

.condition-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}

.condition-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.element-selector,
.operation-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.element-input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cascader-input {
  width: 200px;
}

.custom-name-input {
  width: 200px;
}

.operation-input {
  width: 120px;
}

.remove-btn {
  margin-left: 5px;
}

.add-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.dialog-footer {
  text-align: right;
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
  
  .condition-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cascader-input {
    width: 100%;
  }
  
  .operation-input {
    width: 100%;
  }
}
</style>
