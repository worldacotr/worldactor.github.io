import request from '@/utils/request'
export const storeData = () => {
  return request.get('/store', {
    params: {

    }
  })
}
