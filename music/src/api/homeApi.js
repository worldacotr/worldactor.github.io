import request from '@/utils/request'
export const homeData = () => {
  return request.get('/home', {
    params: {

    }
  })
}
