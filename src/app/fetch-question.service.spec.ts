import { TestBed } from '@angular/core/testing';

import { FetchQuestionService } from './fetch-question.service';

describe('FetchQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchQuestionService = TestBed.get(FetchQuestionService);
    expect(service).toBeTruthy();
  });

  it('should get the data', async () => {
    const service: FetchQuestionService = TestBed.get(FetchQuestionService);
    let result = await service.getQuestions();
    expect(result.length).toBe(10);
  });
});
