import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n").then(function (
      result
    ) {
      const SEPARATED = separate(result);
      Console.print("결과 : " + SEPARATED);
    });
  }
}

const separate = function separateCommasAndColons(input) {
  const SEPARATED_COMMAS = input.split(",");
  let SUM = 0;
  for (const ITEM of SEPARATED_COMMAS) {
    const SEPARATED = ITEM.split(":");
    for (const NUM of SEPARATED) {
      SUM += parseInt(NUM);
    }
  }
  return SUM;
};

export default App;
