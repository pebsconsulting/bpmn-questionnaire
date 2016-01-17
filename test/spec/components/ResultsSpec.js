'use strict';

// virtual-dom
var h                 = require('virtual-dom/h');

// Get components
var BpmnQuestionnaire = require('../../../lib/BpmnQuestionnaire'),
    Results           = require('../../../lib/components/Results');

// Get test helpers
var TestContainer     = require('mocha-test-container-support'),
    TestHelper        = require('../../TestHelper');

describe('Results', function() {

  var testContentContainer,
      element,
      questionnaire;

  beforeEach(function() {

    // Add test container
    testContentContainer = TestContainer.get(this);

    // Create new DOM element with an id and assign to container
    element = document.createElement('div');

    // Append the container element to the test container element
    testContentContainer.appendChild(element);

    //Create a new instance of BpmnQuestionnaire
    questionnaire = new BpmnQuestionnaire({
      container: element,
      questionnaireJson: questionnaireJson
    });

  });

  // Require JSON file of a questionnaire
  var questionnaireJson = require('../../fixtures/json/questionnaire/bpmn-questionnaire-basic.json');
  questionnaireJson = JSON.parse(questionnaireJson);
  
  it('create an instance of the Results component', function() {

    // Create instance
    var results = new Results(questionnaire);

    expect(results).to.be.an.instanceof(Results);

  });

  it('should render the Results component', function() {

    var results = new Results(questionnaire);

    var arrayNodes = results.render(questionnaire.state);

    // Check if intro has actual content
    expect(arrayNodes).to.have.length.above(0);

  });

});