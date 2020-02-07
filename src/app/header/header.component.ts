import { Component, OnInit } from '@angular/core';
import { FetchQuestionService } from '../fetch-question.service';
import { Title } from '@angular/platform-browser';
import { RandomNumberService } from '../random-number.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  questions: Array<string> = [];
  answers: Array<Array<string>> = [];
  n: number = -1;
  done: boolean = false;
  correct: Array<number> = [];
  isFalse: boolean = false;
  proceed: boolean = false;


  constructor(private _questionService: FetchQuestionService, private _title: Title, private _randomGeneratorService: RandomNumberService) { }

  async ngOnInit() {
    let data = await this._questionService.getQuestions();

    data.forEach((el) => {
      this.questions.push(el.question);
      let correct_button = this._randomGeneratorService.randomNumber(4)
      let shuffledAnswers = el.incorrect_answers;
      shuffledAnswers.splice(correct_button, 0, el.correct_answer)
      this.answers.push(shuffledAnswers)
      this.correct.push(correct_button)
    })

    this._title.setTitle("Learning Angular")

  }


  increase() {
    this.n += 1;
    this.n === 10 ? this.done = true : null;
    this.proceed = true

  }

  decrease() {
    this.n -= 1;
  }

  checkTrue(index: number, question: number) {
    this.correct[question] === index ? this.proceed = false : this.isFalse = true;

  }

  reset() {
    document.location.reload()
  }





}
