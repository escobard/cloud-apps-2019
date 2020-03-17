const { getQueriesFrom } = require("@testing-library/nightwatch");

const props = {
    text: {
      withNotes: "create-app integration automated test subject"
    },
    label: {
      menuIcon: "Menu"
    }
  },
  elements = {},
  LandingCommands = {
    async assertHeaderIcon(browser){

      const { getByLabelText } = getQueriesFrom(browser);

      const menu = await getByLabelText(this.props.label.menuIcon);

      this.waitForElementVisible(menu);
    },
    async assertNoNotes(browser){

    },
    async assertWithNotes(browser){

      const { getByText } = getQueriesFrom(browser);

      const withNotes = await getByText(this.props.text.withNotes)

      this.waitForElementVisible(withNotes);
    }
  };

module.exports = {
  url(){
    return this.api.launchUrl;
  },
  commands: [LandingCommands],
  elements,
  props
};