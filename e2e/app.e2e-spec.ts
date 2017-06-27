import { AgendamentoPage } from './app.po';

describe('agendamento App', () => {
  let page: AgendamentoPage;

  beforeEach(() => {
    page = new AgendamentoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
