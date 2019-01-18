import React, { Component } from 'react'
//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFeeling } from '../actions/feelingActions';

let uhf = [
    "AFRAID",
    "apprehensive",
    "dread",
    "foreboding",
    "frightened",
    "mistrustful",
    "panicked",
    "petrified",
    "scared",
    "suspicious",
    "terrified",
    "wary",
    "worried",

    "ANNOYED",
    "aggravated",
    "dismayed",
    "disgruntled",
    "displeased",
    "exasperated",
    "frustrated",
    "impatient",
    "irritated",
    "irked",
    
    "ANGRY",
    "enraged",
    "furious",
    "incensed",
    "indignant",
    "irate",
    "livid",
    "outraged",
    "resentful",
    
    "AVERSION",
    "animosity",
    "appalled",
    "contempt",
    "disgusted",
    "dislike",
    "hate",
    "horrified",
    "hostile",
    "repulsed",
    
    "CONFUSED",
    "ambivalent",
    "baffled",
    "bewildered",
    "dazed",
    "hesitant",
    "lost",
    "mystified",
    "perplexed",
    "puzzled",
    "torn",
    
    "DISCONNECTED",
    "alienated",
    "aloof",
    "apathetic",
    "bored",
    "cold",
    "detached",
    "distant",
    "distracted",
    "indifferent",
    "numb",
    "removed",
    "uninterested",
    "withdrawn",
    
    "DISQUIET",
    "agitated",
    "alarmed",
    "discombobulated",
    "disconcerted",
    "disturbed",
    "perturbed",
    "rattled",
    "restless",
    "shocked",
    "startled",
    "surprised",
    "troubled",
    "turbulent",
    "turmoil",
    "uncomfortable",
    "uneasy",
    "unnerved",
    "unsettled",
    "upset",
    
    "EMBARRASSED",
    "ashamed",
    "chagrined",
    "flustered",
    "guilty",
    "mortified",
    "self-conscious",
    
    "FATIGUE",
    "beat",
    "burnt out",
    "depleted",
    "exhausted",
    "lethargic",
    "listless",
    "sleepy",
    "tired",
    "weary",
    "worn out",
    
    "PAIN",
    "agony",
    "anguished",
    "bereaved",
    "devastated",
    "grief",
    "heartbroken",
    "hurt",
    "lonely",
    "miserable",
    "regretful",
    "remorseful",
    
    "SAD",
    "depressed",
    "dejected",
    "despair",
    "despondent",
    "disappointed",
    "discouraged",
    "disheartened",
    "forlorn",
    "gloomy",
    "heavy hearted",
    "hopeless",
    "melancholy",
    "unhappy",
    "wretched",
    
    "TENSE",
    "anxious",
    "cranky",
    "distressed",
    "distraught",
    "edgy",
    "fidgety",
    "frazzled",
    "irritable",
    "jittery",
    "nervous",
    "overwhelmed",
    "restless",
    "stressed out",
    
    "VULNERABLE",
    "fragile",
    "guarded",
    "helpless",
    "insecure",
    "leery",
    "reserved",
    "sensitive",
    "shaky",
    
    "YEARNING",
    "envious",
    "jealous",
    "longing",
    "nostalgic",
    "pining",
    "wistful"
    
    ];

class UHF extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.cycleFeelings;
    }

    stateClick() {
        console.log('new state', this.state);
        console.log('new props', this.props);
        console.log('what is this', this.props.cycleFeelings)
    }
  render() {
    //const feelings = this.props.cycleFeelings;

    const makeButtons = uhf.map(feeling => (
        <button key={feeling.id} onClick={ () => this.props.selectFeeling(feeling)}>{feeling}</button>
    ))
    console.log('UHF state', this.state);        
    console.log('UHF props', this.props);

    return (
        <div>
            {makeButtons}
            <br/>
            <br/>
            <h2>{this.props.cycleFeelings}</h2>
            <button onClick={this.stateClick.bind(this)}>find out shit</button>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        cycleFeelings: state.cycleFeelings
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectFeeling: selectFeeling}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UHF);