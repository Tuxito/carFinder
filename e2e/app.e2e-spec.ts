import { CarFinderPage } from './app.po';

describe('car-finder App', function() {
  let page: CarFinderPage;

  beforeEach(() => {
    page = new CarFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
