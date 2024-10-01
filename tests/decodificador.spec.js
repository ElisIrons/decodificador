const { test, expect } = require("@playwright/test");

test.describe("Decodificador de Texto", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5501");
    await page
      .context()
      .grantPermissions(["clipboard-read", "clipboard-write"]);
  });

  test("deve exibir a mensagem de campo vazio ao carregar a página", async ({
    page,
  }) => {
    const campoVazioTitulo = await page.locator(".s1-campo-vazio");
    const campoVazioTexto = await page.locator(".s2-campo-vazio");

    await expect(campoVazioTitulo).toHaveText("Nenhuma mensagem encontrada 🔎");
    await expect(campoVazioTexto).toHaveText(
      "Digite uma mensagem que você deseja \n criptografar ou descriptografar."
    );
  });

  test("deve criptografar a mensagem corretamente", async ({ page }) => {
    const inputMensagem = page.locator(".insercao-mensagem");
    const botaoCriptografar = page.locator(".btn-criptografar");
    const saidaResposta = page.locator(".saida-texto");

    await inputMensagem.fill("mensagem teste");
    await botaoCriptografar.click();

    await expect(saidaResposta).toHaveText("menternsaigenterm tenterstenter");
  });

  test("deve descriptografar a mensagem corretamente", async ({ page }) => {
    const inputMensagem = page.locator(".insercao-mensagem");
    const botaoDescriptografar = page.locator(".btn-descriptografar");
    const saidaResposta = page.locator(".saida-texto");

    await inputMensagem.fill("menternsaigenterm tenterstenter");
    await botaoDescriptografar.click();

    await expect(saidaResposta).toHaveText("mensagem teste");
  });

  test("deve copiar a mensagem para a área de transferência", async ({
    page,
  }) => {
    const inputMensagem = page.locator(".insercao-mensagem");
    const botaoCriptografar = page.locator(".btn-criptografar");
    const botaoCopiar = page.locator(".btn-copiar");

    await inputMensagem.fill("mensagem teste");
    await botaoCriptografar.click();
    await botaoCopiar.click();

    const copiedText = await page.evaluate(() =>
      navigator.clipboard.readText()
    );
    await expect(copiedText).toBe("menternsaigenterm tenterstenter");
  });
});
