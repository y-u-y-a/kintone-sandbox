import os, time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options


DRIVER_PATH = os.environ['DRIVER_PATH']
CYBOZU_URL = os.environ['CYBOZU_URL']
KINTONE_APP_JSFILE_UPLOAD_URL = os.environ['KINTONE_APP_JSFILE_UPLOAD_URL']
USERNAME = os.environ['USERNAME']
PASSWORD = os.environ['PASSWORD']
JS_FILE = os.environ['JS_FILE']


def get_driver():
    """Chromeのdriverを取得"""
    options = Options()
    # options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--lang=ja')  # configure language
    driver = webdriver.Chrome(DRIVER_PATH, options=options)
    return driver


def main() -> None:
    # start
    driver = get_driver()
    driver.get(CYBOZU_URL)
    form_username = driver.find_element_by_name('username')
    form_password = driver.find_element_by_name('password')
    form_username.send_keys(USERNAME)
    form_password.send_keys(PASSWORD)
    btn = driver.find_element_by_class_name('login-button')
    btn.click()
    try:
        time.sleep(2)
        driver.get(KINTONE_APP_JSFILE_UPLOAD_URL)
        time.sleep(2)
        el = driver.find_element_by_id('p1ekg6get3gva1svs82f16l8f8l0_html5')
        el.send_keys(JS_FILE)
        pass
    except Exception:
        pass
    # end
    finally:
        driver.quit()
        return


if __name__ == '__main__':
    main()
