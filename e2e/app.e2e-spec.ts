import { BootstrapAppPage } from './app.po';

describe('bootstrap-app App', function() {
  let page: BootstrapAppPage;

  beforeEach(() => {
    page = new BootstrapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
