import request from '@/utils/request'

export function selectAuditRule(){
    return request({
        url: '/system/auditRule/list',
        method: 'get'
    })
}