import { CurriculumPage } from './app.po';

describe('curriculum App', () => {
  let page: CurriculumPage;

  beforeEach(() => {
    page = new CurriculumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
