import { AceleraCrudPage } from './app.po';

describe('acelera-crud App', function() {
  let page: AceleraCrudPage;

  beforeEach(() => {
    page = new AceleraCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
