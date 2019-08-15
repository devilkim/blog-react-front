import http from '../../utils/http';
import utils from '../../utils';

class Board { 
  
  async boardList() {    
    const { data } = await http.get(utils.host('/v1/boards'));
    return data.data.boards;
  }
  async boardListByTag(name) {    
    const { data } = await http.get(utils.host('/v1/boards/tag?name=' + name));
    return data.data.boards;    
  }
  async addBoard(board) {
    const { data } = await http.post(utils.host('/v1/board'), board);
    return data.isSuccess;    
  }
  async board(no) {    
    const { data } = await http.get(utils.host('/v1/board?no=' + no));
    return data.data.board;   
  }
  async tagListByBest() {
    const { data } = await http.get(utils.host('/v1/tags/best'));
    return data.data.tags;   
  }
  async tagListByRecently() {    
    const { data } = await http.get(utils.host('/v1/tags/recently'));
    return data.data.tags;   
  }

}

export default new Board();
