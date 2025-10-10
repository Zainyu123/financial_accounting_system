import * as XLSX from 'xlsx'

/**
 * 导出Excel文件
 * @param data 要导出的数据数组
 * @param filename 文件名（不包含扩展名）
 * @param sheetName 工作表名称
 */
export function exportToExcel(data: any[], filename: string = '稽核规则运算结果', sheetName: string = '稽核结果') {
  try {
    // 创建工作簿
    const workbook = XLSX.utils.book_new()
    
    // 创建工作表
    const worksheet = XLSX.utils.json_to_sheet(data)
    
    // 设置列宽
    const colWidths = [
      { wch: 15 }, // 单位列
      { wch: 60 }, // 稽核规则列
      { wch: 50 }  // 稽核结果列
    ]
    worksheet['!cols'] = colWidths
    
    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
    
    // 生成Excel文件并下载
    XLSX.writeFile(workbook, `${filename}.xlsx`)
    
    return true
  } catch (error) {
    console.error('导出Excel失败:', error)
    return false
  }
}

/**
 * 格式化表格数据为Excel导出格式
 * @param tableData 表格数据
 * @returns 格式化后的数据
 */
export function formatTableDataForExport(tableData: any[]) {
  return tableData.map((item, index) => ({
    '序号': index + 1,
    '单位': item.unit,
    '稽核规则': item.rule,
    '稽核结果': item.result
  }))
}

/**
 * 导出带样式的Excel文件（可选）
 * @param data 要导出的数据数组
 * @param filename 文件名
 * @param sheetName 工作表名称
 */
export function exportStyledExcel(data: any[], filename: string = '稽核规则运算结果', sheetName: string = '稽核结果') {
  try {
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
    
    // 设置表头样式（如果支持的话）
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:D1')
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col })
      if (!worksheet[cellAddress]) continue
      
      // 设置表头为粗体（如果支持）
      worksheet[cellAddress].s = {
        font: { bold: true },
        fill: { fgColor: { rgb: 'F0F0F0' } }
      }
    }
    
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
    XLSX.writeFile(workbook, `${filename}.xlsx`)
    
    return true
  } catch (error) {
    console.error('导出带样式Excel失败:', error)
    return false
  }
}
