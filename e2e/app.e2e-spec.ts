import { FuuclientPage } from './app.po';

describe('fuuclient App', () => {
  let page: FuuclientPage;

  beforeEach(() => {
    page = new FuuclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
