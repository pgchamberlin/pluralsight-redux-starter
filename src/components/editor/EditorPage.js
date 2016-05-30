import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';

class EditorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      card: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.props.actions.createCard(this.state.card);
  }

  cardListItem(card, index) {
    return <li key={index}>{card.title}</li>;
  }

  onTitleChange(event) {
    const card = this.state.card;
    card.title = event.target.value;
    this.setState({card: card});
  }

  render() {
    return (
      <div>
        <h3>Editor</h3>
        <ul>{this.props.cards.map(this.cardListItem)}</ul>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.card.title} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save" />
      </div>
    );
  }
}

EditorPage.propTypes = {
  cards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    cards: state.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
