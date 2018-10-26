import { InquireModule } from './inquire.module';

describe('InquireModule', () => {
  let inquireModule: InquireModule;

  beforeEach(() => {
    inquireModule = new InquireModule();
  });

  it('should create an instance', () => {
    expect(inquireModule).toBeTruthy();
  });
});
