# javascript-calculator-precourse

## 🔍 미션 요구 사항

- [x] 출력 메시지 구현
- [x] 사용자가 입력할 부분 구현
- [x] 결과 출력 메시지 구현
- [x] 쉼표가 구분되도록 구현
- [x] 콜론이 구분되도록 구현
- [x] 구분된 값 계산 구현
- [ ] 잘못된 값 입력 시 Error 구현

<br><br>

## 🎈 요구 사항 구현

### 출력 메시지 구현

1. `@woowacourse/mission-utils`를 활용하기 위해 `npm i`를 해야합니다.
2. `npm -v`를 통해 npm의 버전을 확인하고, API를 활용하기에 부적합하다면 업데이트 합니다.
3. `node -v`를 통해 node의 버전을 확인하고, API를 활용하기에 부적합하다면 업데이트 합니다.
4. `npm i`를 통해 Console API를 설치합니다.
5. `Console.print("덧셈할 문자열을 입력해 주세요.");`를 입력하여 출력 메시지를 구현합니다.
   <br><br>

### 사용자가 입력할 부분 구현

1. `Console.readLineAsync`의 입력된 값은 `then`으로 출력해야합니다.
2. `Console.print` 대신 `Console.readLineAsync`의 요구 사항 메시지를 넣습니다.
3. `.then`을 통해 `readLineAsync`에서 입력받은 결과를 확인합니다.
   <br><br>

### 사용자가 입력할 부분 구현

1. `Console.readLineAsync`의 줄바꿈 문자를 추가하여 입력 받는 위치 변경합니다.
2. `Console.print` 에 `+`를 넣어서 결과 창을 구현합니다.
   <br><br>

### 쉼표가 구분되도록 구현

1. `separated`라는 변수의 함수의 매개변수를 `input`으로 지정합니다.
2. `split(",")`를 통해 문자열(string)을 쉼표(,)를 기준으로 분리합니다.
3. 출력을 통해 분리된 결과를 확인합니다.
   <br><br>

### 콜론이 구분되도록 구현

1. 배열이 된 `SEPARATED_COMMAS`를 반복문을 통해 콜론(:)으로 분리합니다.
2. 출력을 통해 분리된 결과를 확인합니다.
   <br><br>

### 구분된 값 계산 구현

1. 전체의 합을 보여줄 함수 `SUM`을 0으로 초기화합니다.
2. 쉼표와 콜론으로 분리된 `SEPARATED`를 배열을 통해 `NUM`으로 순환해줍니다.
3. 이 때 `NUM`을 `parseInt`를 통해 Integer로 형 변환합니다.
4. 형 변환한 값을 `SUM`에 더해줍니다.
5. 덧셈이 끝난 후 `SUM`을 반환하여 결과를 확인합니다.
   <br><br>
