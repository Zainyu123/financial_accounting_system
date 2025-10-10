# Excel导出功能使用说明

## 功能概述

已为稽核规则运算页面添加了完整的Excel导出功能，使用xlsx库实现。

## 安装依赖

```bash
npm install xlsx
```

## 功能特性

### ✅ 已实现功能

1. **Excel导出**：
   - 导出当前表格中的所有数据
   - 自动添加序号列
   - 设置合适的列宽
   - 生成带时间戳的文件名

2. **数据格式化**：
   - 自动格式化表格数据为Excel格式
   - 包含：序号、单位、稽核规则、稽核结果

3. **用户体验**：
   - 导出成功/失败提示
   - 空数据检查
   - 错误处理

## 文件结构

```
src/
├── utils/
│   └── excelExport.ts    # Excel导出工具函数
└── components/
    └── AuditRuleOperation.vue  # 主组件（已集成导出功能）
```

## 使用方法

### 1. 导出功能

点击页面上的"导出"按钮即可导出当前表格数据为Excel文件。

### 2. 导出内容

导出的Excel文件包含以下列：
- **序号**：自动生成的序号
- **单位**：单位名称
- **稽核规则**：稽核规则描述
- **稽核结果**：稽核结果详情

### 3. 文件名格式

```
稽核规则运算结果_20241201_143000.xlsx
```

## 代码示例

### 导出工具函数

```typescript
// src/utils/excelExport.ts
import * as XLSX from 'xlsx'

export function exportToExcel(data: any[], filename: string, sheetName: string) {
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(data)
  
  // 设置列宽
  const colWidths = [
    { wch: 8 },  // 序号列
    { wch: 15 }, // 单位列
    { wch: 60 }, // 稽核规则列
    { wch: 50 }  // 稽核结果列
  ]
  worksheet['!cols'] = colWidths
  
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
  XLSX.writeFile(workbook, `${filename}.xlsx`)
}
```

### 组件中使用

```vue
<script setup>
import { exportToExcel, formatTableDataForExport } from '../utils/excelExport'
import { ElMessage } from 'element-plus'

const handleExport = () => {
  if (tableData.value.length === 0) {
    ElMessage.warning('没有数据可以导出')
    return
  }
  
  const exportData = formatTableDataForExport(tableData.value)
  const filename = `稽核规则运算结果_${new Date().toISOString().slice(0, 19).replace(/[-:]/g, '').replace('T', '_')}`
  
  const success = exportToExcel(exportData, filename, '稽核结果')
  
  if (success) {
    ElMessage.success('导出成功！')
  } else {
    ElMessage.error('导出失败，请重试')
  }
}
</script>
```

## 扩展功能

### 1. 带样式的导出

```typescript
import { exportStyledExcel } from '../utils/excelExport'

// 使用带样式的导出
exportStyledExcel(exportData, filename, '稽核结果')
```

### 2. 自定义列宽

```typescript
// 在excelExport.ts中修改colWidths数组
const colWidths = [
  { wch: 10 },  // 序号列
  { wch: 20 },  // 单位列
  { wch: 80 },  // 稽核规则列
  { wch: 60 }   // 稽核结果列
]
```

### 3. 添加更多列

```typescript
// 在formatTableDataForExport函数中添加更多字段
export function formatTableDataForExport(tableData: any[]) {
  return tableData.map((item, index) => ({
    '序号': index + 1,
    '单位': item.unit,
    '稽核规则': item.rule,
    '稽核结果': item.result,
    '创建时间': new Date().toLocaleString(), // 新增列
    '状态': '已完成' // 新增列
  }))
}
```

## 注意事项

1. **依赖安装**：确保已安装xlsx依赖
2. **浏览器兼容性**：现代浏览器都支持
3. **文件大小**：大数据量时注意性能
4. **错误处理**：已包含完整的错误处理机制

## 测试

1. 点击"导出"按钮
2. 检查浏览器下载文件夹
3. 打开Excel文件验证数据完整性
4. 确认列宽和格式正确

导出功能已完全集成到页面中，可以直接使用！
