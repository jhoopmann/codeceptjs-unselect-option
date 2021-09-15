    /**
     * @param locator
     * @param text
     * @returns {Promise<void>}
     */
    async unselectOption(locator, text)
    {
        const select = (await this.helpers['Puppeteer']._locate(locator))[0];

        await select.evaluate(
            (select, text) => {
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].value.indexOf(text) > -1) {
                        select.options[i].selected = false;
                    }
                }
            },
            text
        );
    }
