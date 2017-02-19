import { BootstrappingAModulePage } from './app.po';

describe('bootstrapping-a-module App', function() {
  let page: BootstrappingAModulePage;

  beforeEach(() => {
    page = new BootstrappingAModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
