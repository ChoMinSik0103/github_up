package com.ohgiraffers.homework.homework_20250715;

public class homework4 {
    /* 두 개의 정수형 변수를 선언하고, 삼항 연산자를 사용하여
       두 수 중 큰 수를 출력하는 프로그램을 작성하세요.

       -- 출력예시 --
       두 수 중 큰 수는 20입니다.
    */

    public static void main(String[] args) {

        int first = Integer.parseInt(args[0]);
        int second = Integer.parseInt(args[1]);

        System.out.println((first > second)? first:second);
    }
}
