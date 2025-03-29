import { test, expect } from '@playwright/test'
test('Login exitoso', async ({ page }) => {
    await page.goto('https://virtual.tdea.edu.co/login');
    await page.fill('#username', 'maria.escobar30');
    await page.fill('#password', 'Ma1040572049');
    await page.click('button#loginbtn[type="submit"]');
    await expect(page).toHaveURL('https://virtual.tdea.edu.co/my/courses.php');
    });