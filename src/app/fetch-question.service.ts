import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchQuestionService {

  data: Array<any>;

  constructor() { }

  async getQuestions() {
    await fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple`
    )
      .then(res => res.json())
      .then(
        turn => { this.data = turn.results })

    return this.data;
  }
}
