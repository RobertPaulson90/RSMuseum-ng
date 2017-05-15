import { RSMuseumNGPage } from './app.po';

describe('rsmuseum-ng App', () => {
  let page: RSMuseumNGPage;

  beforeEach(() => {
    page = new RSMuseumNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
