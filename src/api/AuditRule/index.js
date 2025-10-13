import request from '@/utils/request'

export function selectAuditRule(){
    return request({
        url: '/system/auditRuleInfo/list',
        method: 'get'
    })
}