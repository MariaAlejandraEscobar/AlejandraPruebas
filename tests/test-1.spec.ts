import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dvirtual%2Btdea%26oq%3Dvirtual%2Btdea%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDM0NDNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DnD3nZ7rdI5-GkvQP89qOmQQ&q=EgSx_c_KGJ37nL8GIjCygsZW10jfTtQUhuGe3soi5uioYgVVaXaaKYoPdAzOeoaH9agy0GPNYs_lXvW21cQyAnJSWgFD');
  await page.locator('iframe[name="a-dv6a07giacz7"]').contentFrame().getByRole('checkbox', { name: 'No soy un robot' }).click();
  await page.locator('iframe[name="c-dv6a07giacz7"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-dv6a07giacz7"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-dv6a07giacz7"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-dv6a07giacz7"]').contentFrame().getByRole('button', { name: 'Verificar' }).click();
  await page.getByRole('link', { name: 'https://virtual.tdea.edu.co/' }).click();
  await page.getByRole('link', { name: 'Acceder' }).click();
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).fill('maria.escobar30');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('M');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Ma1040572049');
  await page.getByRole('button', { name: 'Acceder' }).click();
});