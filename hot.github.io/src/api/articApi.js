
import request from '@/utils/request'
export const articApi = (_limit, _page) => {
  return request.get('/articles', {
    params: {
      _limit,
      _page
    }
  })
}
