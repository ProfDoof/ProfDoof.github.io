var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
import { program } from "@commander-js/extra-typings";
import { promises as fs } from "fs";
import * as path from "path";
import { render as render2 } from "resumed";
import schema from "resume-schema";
import { Result } from "@badrap/result";
import { promisify } from "node:util";

// src/theme.ts
var theme_exports = {};
__export(theme_exports, {
  render: () => render
});

// src/resume.hbs
import Handlebars13 from "handlebars/dist/handlebars.runtime.js";

// src/partials/basics.hbs
import Handlebars from "handlebars/dist/handlebars.runtime.js";
Handlebars.registerHelper({});
Handlebars.registerPartial({});
var basics_default = Handlebars.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = container.lambda, alias2 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "<div id='nameBlock' class='largeFont'>\n	<span class='name'>\n		" + container.escapeExpression(alias1(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0)) + ((stack1 = lookupProperty(helpers, "if").call(alias2, depth0 != null ? lookupProperty(depth0, "label") : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 21, "column": 10 }, "end": { "line": 21, "column": 31 } } })) != null ? stack1 : "") + "\n	</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias2, depth0 != null ? lookupProperty(depth0, "label") : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 23, "column": 1 }, "end": { "line": 25, "column": 8 } } })) != null ? stack1 : "") + "</div>\n<div id='basicsBlock' class='smallFont'>\n	<div class='contactBlock'>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias2, depth0 != null ? lookupProperty(depth0, "email") : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 29, "column": 2 }, "end": { "line": 31, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias2, depth0 != null ? lookupProperty(depth0, "phone") : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 32, "column": 2 }, "end": { "line": 35, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = container.hooks.blockHelperMissing.call(depth0, alias1(depth0 != null ? lookupProperty(depth0, "location") : depth0, depth0), { "name": "location", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 36, "column": 2 }, "end": { "line": 41, "column": 15 } } })) != null ? stack1 : "") + "	</div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias2, (stack1 = depth0 != null ? lookupProperty(depth0, "profiles") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 43, "column": 1 }, "end": { "line": 54, "column": 8 } } })) != null ? stack1 : "") + "</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  return ",";
}, "4": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "	<span class='label'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "label") : depth0, depth0)) + "</span>\n";
}, "6": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='email'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "email") : depth0, depth0)) + "</span>\n";
}, "8": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='divider'>|</span>\n		<span class='phone'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "phone") : depth0, depth0)) + "</span>\n";
}, "10": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='divider'>|</span>\n		<span class='address'>\n			" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "city") : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 39, "column": 3 }, "end": { "line": 39, "column": 30 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "region") : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 39, "column": 30 }, "end": { "line": 39, "column": 63 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "countryCode") : depth0, { "name": "if", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 39, "column": 63 }, "end": { "line": 39, "column": 106 } } })) != null ? stack1 : "") + "\n		</span>\n";
}, "11": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "city") : depth0, depth0));
}, "13": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ", " + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "region") : depth0, depth0));
}, "15": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ", " + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "countryCode") : depth0, depth0));
}, "17": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "	<div id='profilesBlock'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "profiles") : depth0, { "name": "each", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 45, "column": 2 }, "end": { "line": 52, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n";
}, "18": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "url") : depth0, { "name": "if", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 46, "column": 2 }, "end": { "line": 51, "column": 9 } } })) != null ? stack1 : "";
}, "19": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='url'>\n			<b>" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "network") : depth0, depth0)) + ":</b> <a href='" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a>\n		</span>\n		" + ((stack1 = lookupProperty(helpers, "unless").call(depth0 != null ? depth0 : container.nullContext || {}, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(20, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 50, "column": 2 }, "end": { "line": 50, "column": 60 } } })) != null ? stack1 : "") + "\n";
}, "20": function(container, depth0, helpers, partials, data) {
  return "<span class='divider'>|</span>";
}, "22": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='summaryBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>SUMMARY</span>
	</div>
	<div class='sectionContent'>
		<span>` + container.escapeExpression(container.lambda((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "basics") : stack1) != null ? lookupProperty(stack1, "summary") : stack1, depth0)) + "</span>\n	</div>\n</div>\n";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ((stack1 = container.hooks.blockHelperMissing.call(depth0, container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "basics") : stack1, depth0), { "name": "resume.basics", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 56, "column": 18 } } })) != null ? stack1 : "") + "\n" + ((stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "basics") : stack1) != null ? lookupProperty(stack1, "summary") : stack1, { "name": "if", "hash": {}, "fn": container.program(22, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/basics.hbs", "start": { "line": 58, "column": 0 }, "end": { "line": 68, "column": 7 } } })) != null ? stack1 : "");
}, "useData": true });

// src/partials/education.hbs
import Handlebars2 from "handlebars/dist/handlebars.runtime.js";
Handlebars2.registerHelper({});
Handlebars2.registerPartial({});
var education_default = Handlebars2.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='education' class="sectionBlock">
	<div class='sectionName'>
		<span>EDUCATION</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "education") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 41, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='educationBlock'>\n			<span class='title'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "institution") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 28, "column": 4 }, "end": { "line": 28, "column": 45 } } })) != null ? stack1 : "") + "\n			</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 30, "column": 3 }, "end": { "line": 34, "column": 10 } } })) != null ? stack1 : "") + "			<div class=''>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "studyType") : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 36, "column": 4 }, "end": { "line": 36, "column": 42 } } })) != null ? stack1 : "") + " - " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "area") : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 36, "column": 45 }, "end": { "line": 36, "column": 72 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "gpa") : depth0, { "name": "if", "hash": {}, "fn": container.program(16, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 36, "column": 72 }, "end": { "line": 36, "column": 104 } } })) != null ? stack1 : "") + "\n			</div>\n		\n		</div>\n		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 40, "column": 2 }, "end": { "line": 40, "column": 59 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "institution") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span class='date'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 32, "column": 4 }, "end": { "line": 32, "column": 41 } } })) != null ? stack1 : "") + " &mdash; " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "endDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.program(10, data, 0), "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 32, "column": 50 }, "end": { "line": 32, "column": 98 } } })) != null ? stack1 : "") + "\n			</span>\n";
}, "6": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "startDate") : depth0, depth0));
}, "8": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "endDate") : depth0, depth0));
}, "10": function(container, depth0, helpers, partials, data) {
  return "Present";
}, "12": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "studyType") : depth0, depth0)) + " ";
}, "14": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "area") : depth0, depth0));
}, "16": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ", GPA: " + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "gpa") : depth0, depth0));
}, "18": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "education") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/education.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 44, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/skills.hbs
import Handlebars3 from "handlebars/dist/handlebars.runtime.js";
Handlebars3.registerHelper({});
Handlebars3.registerPartial({});
var skills_default = Handlebars3.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='skills' class="sectionBlock">
	<div class='sectionName'>
		<span>SKILLS</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "skills") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 40, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='skillBlock'>\n			<span class='title'>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 27, "column": 23 }, "end": { "line": 27, "column": 50 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "level") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 27, "column": 50 }, "end": { "line": 27, "column": 91 } } })) != null ? stack1 : "") + ":</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "keywords") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 28, "column": 3 }, "end": { "line": 32, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "details") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 33, "column": 3 }, "end": { "line": 38, "column": 10 } } })) != null ? stack1 : "") + "		</div>\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return " <em>(" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "level") : depth0, depth0)) + ")</em>";
}, "7": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "keywords") : depth0, { "name": "each", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 29, "column": 3 }, "end": { "line": 31, "column": 12 } } })) != null ? stack1 : "";
}, "8": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span>" + container.escapeExpression(container.lambda(depth0, depth0)) + "</span>" + ((stack1 = lookupProperty(helpers, "unless").call(depth0 != null ? depth0 : container.nullContext || {}, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 30, "column": 21 }, "end": { "line": 30, "column": 51 } } })) != null ? stack1 : "") + "\n";
}, "9": function(container, depth0, helpers, partials, data) {
  return ", ";
}, "11": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "details") : depth0, { "name": "each", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 34, "column": 3 }, "end": { "line": 37, "column": 12 } } })) != null ? stack1 : "";
}, "12": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "text") : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 35, "column": 9 }, "end": { "line": 35, "column": 36 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "comment") : depth0, { "name": "if", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 35, "column": 36 }, "end": { "line": 35, "column": 81 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 35, "column": 81 }, "end": { "line": 36, "column": 15 } } })) != null ? stack1 : "") + "</span>\n";
}, "13": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "text") : depth0, depth0));
}, "15": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return " <em>(" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "comment") : depth0, depth0)) + ")</em>";
}, "17": function(container, depth0, helpers, partials, data) {
  return ",\n				";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "skills") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/skills.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 43, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/work.hbs
import Handlebars4 from "handlebars/dist/handlebars.runtime.js";
Handlebars4.registerHelper({});
Handlebars4.registerPartial({});
var work_default = Handlebars4.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='workBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>EXPERIENCE</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "work") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 51, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.lambda, alias3 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `		<div class="jobBlock">
			<div class='blockHeader'>
				<span class='title'>` + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 28, "column": 24 }, "end": { "line": 28, "column": 51 } } })) != null ? stack1 : "") + "</span>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "position") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 29, "column": 4 }, "end": { "line": 29, "column": 72 } } })) != null ? stack1 : "") + "\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 30, "column": 4 }, "end": { "line": 34, "column": 11 } } })) != null ? stack1 : "") + "			</div>\n			<div><a href='" + alias3(alias2(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias3(alias2(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a></div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "summary") : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 37, "column": 3 }, "end": { "line": 41, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "highlights") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(16, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 42, "column": 3 }, "end": { "line": 48, "column": 10 } } })) != null ? stack1 : "") + "			" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 49, "column": 3 }, "end": { "line": 49, "column": 60 } } })) != null ? stack1 : "") + "\n		</div>\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ' | <span class="position">' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "position") : depth0, depth0)) + "</span>";
}, "7": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "				<span class='date'>\n					" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 32, "column": 5 }, "end": { "line": 32, "column": 42 } } })) != null ? stack1 : "") + " &mdash; " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "endDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.program(12, data, 0), "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 32, "column": 51 }, "end": { "line": 32, "column": 99 } } })) != null ? stack1 : "") + "\n				</span>\n";
}, "8": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "startDate") : depth0, depth0));
}, "10": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "endDate") : depth0, depth0));
}, "12": function(container, depth0, helpers, partials, data) {
  return "Present";
}, "14": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '			<div class="summary">\n				<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "summary") : depth0, depth0)) + "</p>\n			</div>\n";
}, "16": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<ul class='highlights'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "highlights") : depth0, { "name": "each", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 44, "column": 4 }, "end": { "line": 46, "column": 13 } } })) != null ? stack1 : "") + "			</ul>\n";
}, "17": function(container, depth0, helpers, partials, data) {
  return "				<li>" + container.escapeExpression(container.lambda(depth0, depth0)) + "</li>\n";
}, "19": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "work") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/work.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 54, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/publications.hbs
import Handlebars5 from "handlebars/dist/handlebars.runtime.js";

// src/helpers/formatDate.ts
function formatDate(dateString) {
  const dateStrArr = dateString.split("-");
  const [a, b, c] = dateStrArr;
  if (a !== "" && b !== "" && c !== "")
    return new Date(dateString).toLocaleDateString("en", {
      month: "short",
      year: "numeric",
      day: "numeric"
    });
  if (a !== "" && b !== "")
    return new Date(dateString).toLocaleDateString("en", {
      month: "short",
      year: "numeric"
    });
  return dateStrArr;
}

// src/partials/publications.hbs
Handlebars5.registerHelper({ formatDate });
Handlebars5.registerPartial({});
var publications_default = Handlebars5.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "<div class='sectionLine'></div>\n<div id='publications'>\n	<div class='sectionName'>\n		<span>PUBLICATIONS</span>\n	</div>\n	<div class='sectionContent'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "publications") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 50, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='blockHeader'>\n			<span class='title'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 28, "column": 4 }, "end": { "line": 28, "column": 31 } } })) != null ? stack1 : "") + "\n			</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "releaseDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 30, "column": 3 }, "end": { "line": 34, "column": 10 } } })) != null ? stack1 : "") + "		</div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "publisher") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 36, "column": 2 }, "end": { "line": 38, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "url") : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 39, "column": 2 }, "end": { "line": 43, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "summary") : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 44, "column": 2 }, "end": { "line": 48, "column": 9 } } })) != null ? stack1 : "") + "		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 49, "column": 2 }, "end": { "line": 49, "column": 59 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span class='date'>\n				<span class='releaseDate'>" + container.escapeExpression(lookupProperty(helpers, "formatDate").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "releaseDate") : depth0, { "name": "formatDate", "hash": {}, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 32, "column": 30 }, "end": { "line": 32, "column": 56 } } })) + "</span>\n			</span>\n";
}, "7": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<div class="publisher">' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "publisher") : depth0, depth0)) + "</div>\n";
}, "9": function(container, depth0, helpers, partials, data) {
  var alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='url'>\n			<a href='" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a>\n		</div>\n";
}, "11": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<div class="summary">\n			<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "summary") : depth0, depth0)) + "</p>\n		</div>\n";
}, "13": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "publications") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/publications.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 53, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/projects.hbs
import Handlebars6 from "handlebars/dist/handlebars.runtime.js";
Handlebars6.registerHelper({});
Handlebars6.registerPartial({});
var projects_default = Handlebars6.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='projectsBlock' class="sectionBlock">
	<div class='sectionName'>
		<span>PROJECTS</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "projects") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 54, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.lambda, alias3 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `		<div class="projectBlock">
			<div class='blockHeader'>
				<span class='title'>
					` + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 29, "column": 5 }, "end": { "line": 29, "column": 32 } } })) != null ? stack1 : "") + "\n				</span>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "entity") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 31, "column": 4 }, "end": { "line": 31, "column": 66 } } })) != null ? stack1 : "") + "\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "roles") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 32, "column": 4 }, "end": { "line": 32, "column": 120 } } })) != null ? stack1 : "") + "\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 33, "column": 4 }, "end": { "line": 37, "column": 11 } } })) != null ? stack1 : "") + "			</div>\n			<div><a href='" + alias3(alias2(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias3(alias2(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a></div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "description") : depth0, { "name": "if", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 40, "column": 3 }, "end": { "line": 44, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "highlights") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(20, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 45, "column": 3 }, "end": { "line": 51, "column": 10 } } })) != null ? stack1 : "") + "			" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(23, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 52, "column": 3 }, "end": { "line": 52, "column": 60 } } })) != null ? stack1 : "") + "\n		</div>\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ' | <span class="entity">' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "entity") : depth0, depth0)) + "</span>";
}, "7": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ' | <span class="roles">' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "roles") : depth0, { "name": "each", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 32, "column": 47 }, "end": { "line": 32, "column": 106 } } })) != null ? stack1 : "") + "</span>";
}, "8": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0, depth0)) + ((stack1 = lookupProperty(helpers, "unless").call(depth0 != null ? depth0 : container.nullContext || {}, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 32, "column": 67 }, "end": { "line": 32, "column": 97 } } })) != null ? stack1 : "");
}, "9": function(container, depth0, helpers, partials, data) {
  return ", ";
}, "11": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "				<span class='date'>\n					" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 35, "column": 5 }, "end": { "line": 35, "column": 42 } } })) != null ? stack1 : "") + " &mdash; " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "endDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.program(16, data, 0), "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 35, "column": 51 }, "end": { "line": 35, "column": 99 } } })) != null ? stack1 : "") + "\n				</span>\n";
}, "12": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "startDate") : depth0, depth0));
}, "14": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "endDate") : depth0, depth0));
}, "16": function(container, depth0, helpers, partials, data) {
  return "Present";
}, "18": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '			<div class="description">\n				<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "description") : depth0, depth0)) + "</p>\n			</div>\n";
}, "20": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<ul class='highlights'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "highlights") : depth0, { "name": "each", "hash": {}, "fn": container.program(21, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 47, "column": 4 }, "end": { "line": 49, "column": 13 } } })) != null ? stack1 : "") + "			</ul>\n";
}, "21": function(container, depth0, helpers, partials, data) {
  return "				<li>" + container.escapeExpression(container.lambda(depth0, depth0)) + "</li>\n";
}, "23": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "projects") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/projects.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 57, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/certificates.hbs
import Handlebars7 from "handlebars/dist/handlebars.runtime.js";
Handlebars7.registerHelper({ formatDate });
Handlebars7.registerPartial({});
var certificates_default = Handlebars7.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "<div class='sectionLine'></div>\n<div id='certificates'>\n	<div class='sectionName'>\n		<span>CERTIFICATES</span>\n	</div>\n	<div class='sectionContent'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "certificates") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 48, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='blockHeader'>\n			<span class='title'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 28, "column": 4 }, "end": { "line": 28, "column": 31 } } })) != null ? stack1 : "") + "\n			</span>\n			" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "issuer") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 30, "column": 3 }, "end": { "line": 30, "column": 65 } } })) != null ? stack1 : "") + "\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "date") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 31, "column": 3 }, "end": { "line": 35, "column": 10 } } })) != null ? stack1 : "") + "		</div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "url") : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 37, "column": 2 }, "end": { "line": 41, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "summary") : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 42, "column": 2 }, "end": { "line": 46, "column": 9 } } })) != null ? stack1 : "") + "		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 47, "column": 2 }, "end": { "line": 47, "column": 59 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ' | <span class="issuer">' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "issuer") : depth0, depth0)) + "</span>";
}, "7": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span class='date'>\n				<span class='date'>" + container.escapeExpression(lookupProperty(helpers, "formatDate").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "date") : depth0, { "name": "formatDate", "hash": {}, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 33, "column": 23 }, "end": { "line": 33, "column": 42 } } })) + "</span>\n			</span>\n";
}, "9": function(container, depth0, helpers, partials, data) {
  var alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='url'>\n			<a href='" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a>\n		</div>\n";
}, "11": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<div class="summary">\n			<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "summary") : depth0, depth0)) + "</p>\n		</div>\n";
}, "13": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "certificates") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/certificates.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 51, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/awards.hbs
import Handlebars8 from "handlebars/dist/handlebars.runtime.js";
Handlebars8.registerHelper({});
Handlebars8.registerPartial({});
var awards_default = Handlebars8.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='awards' class="sectionBlock">
	<div class='sectionName'>
		<span>AWARDS</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "awards") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 45, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='blockHeader'>\n			<span class='title'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "title") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 28, "column": 4 }, "end": { "line": 28, "column": 33 } } })) != null ? stack1 : "") + "\n			</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "date") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 30, "column": 3 }, "end": { "line": 34, "column": 10 } } })) != null ? stack1 : "") + "		</div>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "awarder") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 36, "column": 2 }, "end": { "line": 38, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "summary") : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 39, "column": 2 }, "end": { "line": 43, "column": 9 } } })) != null ? stack1 : "") + "		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 44, "column": 2 }, "end": { "line": 44, "column": 59 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "title") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span class='date'>\n				<span class='date'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "date") : depth0, depth0)) + "</span>\n			</span>\n";
}, "7": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '			<div class="awarder">' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "awarder") : depth0, depth0)) + "</div>\n";
}, "9": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<div class="summary">\n			<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "summary") : depth0, depth0)) + "</p>\n		</div>\n";
}, "11": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "awards") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/awards.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 48, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/volunteer.hbs
import Handlebars9 from "handlebars/dist/handlebars.runtime.js";
Handlebars9.registerHelper({});
Handlebars9.registerPartial({});
var volunteer_default = Handlebars9.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='volunteer' class="sectionBlock">
	<div class='sectionName'>
		<span>VOLUNTEERING</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "volunteer") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 50, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<div class='blockHeader'>\n			<span class='title'>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "position") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 27, "column": 23 }, "end": { "line": 27, "column": 58 } } })) != null ? stack1 : "") + "</span>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "organization") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 27, "column": 65 }, "end": { "line": 27, "column": 111 } } })) != null ? stack1 : "") + "\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 28, "column": 3 }, "end": { "line": 32, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "url") : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 33, "column": 3 }, "end": { "line": 35, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "summary") : depth0, { "name": "if", "hash": {}, "fn": container.program(16, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 36, "column": 3 }, "end": { "line": 40, "column": 10 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "highlights") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 41, "column": 3 }, "end": { "line": 47, "column": 10 } } })) != null ? stack1 : "") + "		</div>\n		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(21, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 49, "column": 2 }, "end": { "line": 49, "column": 59 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "position") : depth0, depth0));
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return " | " + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "organization") : depth0, depth0));
}, "7": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<span class='date'>\n				" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "startDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 30, "column": 4 }, "end": { "line": 30, "column": 41 } } })) != null ? stack1 : "") + " &mdash; " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "endDate") : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.program(12, data, 0), "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 30, "column": 50 }, "end": { "line": 30, "column": 98 } } })) != null ? stack1 : "") + "\n			</span>\n";
}, "8": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "startDate") : depth0, depth0));
}, "10": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "endDate") : depth0, depth0));
}, "12": function(container, depth0, helpers, partials, data) {
  return "Present";
}, "14": function(container, depth0, helpers, partials, data) {
  var alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<div class='url'><a href='" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "'>" + alias2(alias1(depth0 != null ? lookupProperty(depth0, "url") : depth0, depth0)) + "</a></div>\n";
}, "16": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '			<div class="summary">\n				<p>' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "summary") : depth0, depth0)) + "</p>\n			</div>\n";
}, "18": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "			<ul class='highlights'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "highlights") : depth0, { "name": "each", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 43, "column": 4 }, "end": { "line": 45, "column": 13 } } })) != null ? stack1 : "") + "			</ul>\n";
}, "19": function(container, depth0, helpers, partials, data) {
  return "				<li>" + container.escapeExpression(container.lambda(depth0, depth0)) + "</li>\n";
}, "21": function(container, depth0, helpers, partials, data) {
  return "<div class='separator'></div>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "volunteer") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/volunteer.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 53, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/languages.hbs
import Handlebars10 from "handlebars/dist/handlebars.runtime.js";
Handlebars10.registerHelper({});
Handlebars10.registerPartial({});
var languages_default = Handlebars10.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='languages' class="sectionBlock">
	<div class='sectionName'>
		<span>LANGUAGES</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "languages") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/languages.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 31, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='language'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "language") : depth0, depth0)) + "</span>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "fluency") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/languages.hbs", "start": { "line": 27, "column": 2 }, "end": { "line": 29, "column": 9 } } })) != null ? stack1 : "") + "		" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/languages.hbs", "start": { "line": 30, "column": 2 }, "end": { "line": 30, "column": 44 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='fluency'><em>(" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "fluency") : depth0, depth0)) + ")</em></span>\n";
}, "5": function(container, depth0, helpers, partials, data) {
  return "<span>,</span>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "languages") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/languages.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 34, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/interests.hbs
import Handlebars11 from "handlebars/dist/handlebars.runtime.js";
Handlebars11.registerHelper({});
Handlebars11.registerPartial({});
var interests_default = Handlebars11.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id='interests' class="sectionBlock">
	<div class='sectionName'>
		<span>INTERESTS</span>
	</div>
	<div class='sectionContent'>
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "interests") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 40, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "		<span class='name'>" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0)) + "</span>\n		<!--\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "keywords") : depth0) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 28, "column": 6 }, "end": { "line": 38, "column": 13 } } })) != null ? stack1 : "") + "      -->" + ((stack1 = lookupProperty(helpers, "unless").call(alias1, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 39, "column": 9 }, "end": { "line": 39, "column": 52 } } })) != null ? stack1 : "") + "\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "      --><span class='keywords'> <em>[\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "keywords") : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 30, "column": 4 }, "end": { "line": 34, "column": 13 } } })) != null ? stack1 : "") + "				]\n			</em></span>\n		<!--\n";
}, "4": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return "				" + container.escapeExpression(container.lambda(depth0, depth0)) + "\n				<!--\n        -->" + ((stack1 = lookupProperty(helpers, "unless").call(depth0 != null ? depth0 : container.nullContext || {}, data && lookupProperty(data, "last"), { "name": "unless", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 33, "column": 11 }, "end": { "line": 33, "column": 41 } } })) != null ? stack1 : "") + "\n";
}, "5": function(container, depth0, helpers, partials, data) {
  return ", ";
}, "7": function(container, depth0, helpers, partials, data) {
  return "<span>, </span>";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "interests") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/interests.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 43, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/partials/references.hbs
import Handlebars12 from "handlebars/dist/handlebars.runtime.js";
Handlebars12.registerHelper({});
Handlebars12.registerPartial({});
var references_default = Handlebars12.template({ "1": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return `<div class='sectionLine'></div>
<div id="references">
	<div class='sectionName'>
		<span>REFERENCES</span>
	</div>
	<div class="sectionContent">
` + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "references") : stack1, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/references.hbs", "start": { "line": 25, "column": 2 }, "end": { "line": 37, "column": 11 } } })) != null ? stack1 : "") + "	</div>\n</div>\n";
}, "2": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "reference") : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/references.hbs", "start": { "line": 26, "column": 2 }, "end": { "line": 30, "column": 9 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "name") : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/references.hbs", "start": { "line": 31, "column": 2 }, "end": { "line": 35, "column": 9 } } })) != null ? stack1 : "") + "		</blockquote>\n";
}, "3": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<blockquote class="reference">\n			' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "reference") : depth0, depth0)) + "\n		\n";
}, "5": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '		<div class="name">\n			\u2014 ' + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0)) + "\n		</div>\n";
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "references") : stack1) != null ? lookupProperty(stack1, "length") : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/partials/references.hbs", "start": { "line": 18, "column": 0 }, "end": { "line": 40, "column": 7 } } })) != null ? stack1 : "";
}, "useData": true });

// src/resume.hbs
Handlebars13.registerHelper({});
Handlebars13.registerPartial({ basics: basics_default, education: education_default, skills: skills_default, work: work_default, publications: publications_default, projects: projects_default, certificates: certificates_default, awards: awards_default, volunteer: volunteer_default, languages: languages_default, interests: interests_default, references: references_default });
var resume_default = Handlebars13.template({ "1": function(container, depth0, helpers, partials, data) {
  var lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "name") : depth0, depth0));
}, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
  var stack1, alias1 = container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
      return parent[propertyName];
    }
    return void 0;
  };
  return '<!doctype html>\n<html lang="en">\n	<head>\n	\n	<meta charset="utf-8">\n	<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">\n	\n	<title>' + ((stack1 = container.hooks.blockHelperMissing.call(depth0, alias1((stack1 = depth0 != null ? lookupProperty(depth0, "resume") : depth0) != null ? lookupProperty(stack1, "basics") : stack1, depth0), { "name": "resume.basics", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "source": "/home/john/RemoteProjects/WebstormProjects/Resume/src/resume.hbs", "start": { "line": 25, "column": 8 }, "end": { "line": 25, "column": 52 } } })) != null ? stack1 : "") + "</title>\n\n	<style>\n	" + ((stack1 = alias1(depth0 != null ? lookupProperty(depth0, "css") : depth0, depth0)) != null ? stack1 : "") + '\n	</style>\n	\n	</head>\n	<body>\n	\n	<div id="resume">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "basics"), depth0, { "name": "basics", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "education"), depth0, { "name": "education", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "skills"), depth0, { "name": "skills", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "work"), depth0, { "name": "work", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "publications"), depth0, { "name": "publications", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "projects"), depth0, { "name": "projects", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "certificates"), depth0, { "name": "certificates", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "awards"), depth0, { "name": "awards", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "volunteer"), depth0, { "name": "volunteer", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "languages"), depth0, { "name": "languages", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "interests"), depth0, { "name": "interests", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + ((stack1 = container.invokePartial(lookupProperty(partials, "references"), depth0, { "name": "references", "data": data, "indent": "		", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "	</body>\n</html>\n";
}, "usePartial": true, "useData": true });

// src/style.css
var style_default = 'body {\n    background: #EEEEEE;\n    font: 13px "Times New Roman", Times, sans-serif;\n    line-height: 1.4;\n    margin: 40px 0;\n}\n\nem {\n    color: #999;\n}\n\np {\n    line-height: 1.4;\n}\n\nul {\n    margin-bottom: 0;\n}\n\nli {\n    margin-bottom: 2px;\n}\n\na {\n    text-decoration: none;\n}\n\n#resume {\n    margin: 0 auto;\n    max-width: 600px;\n    padding: 80px 100px;\n    background: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 4px #aaa;\n    -webkit-box-shadow: 2px 2px 4px #aaa;\n}\n\n.coursesList {\n    width: 28%;\n    vertical-align: top;\n    display: inline-block;\n}\n\n.largeFont {\n    font-size: 20px;\n}\n\n.smallFont {\n    font-size: 13px;\n}\n\n.sectionBlock {\n    display: flex;\n    width: 100%;\n}\n\n.sectionName {\n    width: 18%;\n    vertical-align: top;\n    display: inline-block;\n}\n\n.sectionContent {\n    width: 80%;\n    vertical-align: top;\n    display: inline-block;\n}\n\n.sectionContent ul {\n    padding-left: 20px;\n    margin-top: 6px;\n    list-style-type: circle;\n}\n\n.sectionContent .title {\n    font-weight: bold;\n}\n\n.sectionContent .date {\n    float: right;\n}\n\n.sectionContent .separator {\n    height: 14px;\n}\n\n.sectionLine {\n    border-style: dashed;\n    border-width: 1px;\n    border-color: #CFCFCF;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.divider {\n    font-weight: bold;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.summary {\n    margin-top: 6px;\n}\n\n.skillBlock {\n    margin-bottom: 4px;\n}\n\n.jobBlock {\n    page-break-inside: avoid;\n}\n\n.description {\n    text-align: justify;\n}\n\nblockquote.reference {\n    margin: 0;\n    margin-bottom: 1em;\n}\n\n\n/* Media Queries */\n\n@media only screen and (max-width: 40em) {\n    body {\n        margin: 0;\n        font-size: 14px;\n    }\n    #resume {\n        margin: 0 auto;\n        max-width: 600px;\n        padding: 0.5em 1em;\n        border: none;\n    }\n    .sectionBlock {\n        flex-direction: column;\n    }\n    .sectionContent {\n        width: 100%;\n    }\n    .sectionContent .date {\n        padding-right: 2em;\n    }\n    .sectionName {\n        width: auto;\n    }\n    .largeFont {\n        font-size: 20px;\n    }\n    .smallFont {\n        font-size: 14px;\n    }\n}\n\n@media print {\n    body {\n        background: #FFFFFF;\n    }\n    #resume {\n        margin: 0 auto;\n        max-width: 600px;\n        padding: 0px 0px;\n        border: 0px;\n        background: #fff;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n    }\n    a {\n        color: black;\n    }\n}';

// src/theme.ts
var render = (resume) => {
  return resume_default({
    css: style_default,
    resume
  });
};

// src/index.ts
import { mergician } from "mergician";
var validate = promisify(schema.validate);
async function htmlToPdfBuffer(html) {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  return page.pdf({
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4"
  }).then(async (buf) => {
    await browser.close();
    return buf;
  });
}
async function generateResumeHtml(theme, resume) {
  try {
    const rendered = render2(resume, theme);
    if (typeof rendered === "string") {
      return Result.ok(rendered);
    }
    return rendered.then((str) => Result.ok(str));
  } catch (e) {
    return Result.err(new Error(`Error occurred when generating the resume HTML: ${typeof e === "object" && e !== null && "stack" in e ? e.stack : e}`));
  }
}
async function loadResumeFile(resumePath) {
  return fs.readFile(resumePath, "utf-8").then((content) => JSON.parse(content));
}
async function loadResume(resumePaths) {
  const resume = mergician(...await Promise.all(resumePaths.map(loadResumeFile)));
  if (!await validate(resume)) {
    return Result.err(new Error(`${resumePaths} when merged do not produce a valid resume object by the jsonresume schema`));
  }
  return Result.ok(resume);
}
async function renderResume({ outName, theme, resumePaths, renders }) {
  const resumeResult = await loadResume(resumePaths);
  if (resumeResult.isErr) {
    return Result.err(resumeResult.error);
  }
  const resume = resumeResult.value;
  const htmlResult = await generateResumeHtml(theme, resume);
  if (htmlResult.isErr) {
    return Result.err(htmlResult.error);
  }
  const resumeHtml = htmlResult.value;
  const outputPaths = [];
  for (const render3 of renders) {
    const buffer = await render3.bufferGenFunc(resumeHtml);
    const outPath = `${outName}.${render3.mode}`;
    await fs.writeFile(outPath, buffer);
    outputPaths.push(`${render3.mode.toUpperCase()} file written to ${outPath}`);
  }
  return Result.ok(outputPaths.join("\n"));
}
async function htmlToBuffer(html) {
  return Buffer.from(html);
}
var funcMap = {
  "pdf": htmlToPdfBuffer,
  "html": htmlToBuffer
};
var modeMap = {
  "pdf": "pdf" /* PDF */,
  "html": "html" /* HTML */
};
function getRendersFromModes(modes) {
  if (modes.length === 0) {
    return [];
  }
  return modes.map((val) => {
    const mode = modeMap[val.toLowerCase()];
    if (!(mode in funcMap)) {
      throw "Invalid render mode";
    }
    return {
      mode,
      bufferGenFunc: funcMap[mode]
    };
  });
}
program.command("validate").argument("<file>", "Resume file to validate").action((targetFile) => {
  loadResumeFile(targetFile).then((resume) => validate(resume)).then(() => console.log(`${targetFile} is valid`)).catch((reason) => console.log(`${targetFile} is not valid: ${JSON.stringify(reason)}`));
});
program.command("render").option("-o, --output-name <output>", "Name of the output file. This does not respect extension. That is only set through mode").option("-r, --render <mode...>", "Render mode [PDF, HTML]", ["pdf"]).option("-t, --theme <theme>", "Theme module to render. Attempts to import via a dynamic import so if module resolution fails, this fails. Make sure that it is installed").argument("<files...>", "Resume files to merge and render").action(async (targetFiles, options) => {
  const theme = options.theme !== void 0 ? await import(options.theme) : theme_exports;
  const result = await renderResume({
    outName: options.outputName != null ? options.outputName : path.basename(targetFiles[0], ".json"),
    theme,
    resumePaths: targetFiles,
    renders: getRendersFromModes(options.render)
  });
  if (result.isErr) {
    console.error(`Error occurred while rendering resume: ${result.error}`);
  } else {
    console.log(result.value);
  }
});
await program.parseAsync();
