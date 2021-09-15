    /**
     * unselects an option of a selected by given visible text
     * @param locator
     * @param text
     * @returns {Promise<void>}
     */
    async unselectOption(locator, text)
    {
        const Puppeteer = this.helpers['Puppeteer'];
        const selects = await Puppeteer._locate(selectLocator);
        const select = selects[0];

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
