import axios from 'axios';
import utils from '../utils';

class Board {
  sampleData = [
    {no: 3, title: "Just sample data, Not found server", date: "19.07.24(목)", tags: [{no: 3, boardNo: 3, name: "english"}]},
    {no: 2, title: "통신이 안되서 보여주는 데이터", date: "19.07.24(목)", tags: [{no: 2, boardNo: 2, name: "메시지"}]},
    {no: 1, title: "샘플 데이터 제목", date: "19.07.24(목)", tags: [{no: 1, boardNo: 1, name: "샘플"}, {no: 2, boardNo: 1, name: "메시지"}]}
  ];
  
  async boardList() {    
    try {
      const { data } = await axios.get(utils.host('/v1/boards'));
      return data.boards;
    } catch (e) {      
      return this.sampleData;
    }    
  }
  async addBoard(board) {
    try {
      const { status } = await axios.post(utils.host('/v1/board'), board, {headers: {'content-type': 'application/json'}});    
      if (status !== 200) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }           
  }
  async board(no) {    
    try {
      const { data } = await axios.get(utils.host('/v1/board?no=' + no));
      return data.board;
    } catch (e) {      
      return this.sampleData.filter(item => item.no === no)[0];
    }    
  }

}

export default new Board();
