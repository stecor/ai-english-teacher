"use strict";
exports.__esModule = true;
exports.HowtouseSection = void 0;
var progress_card_1 = require("@/components/progress-card");
var conversation_card_1 = require("@/components/conversation-card");
var feedback_card_1 = require("@/components/feedback-card");
exports.HowtouseSection = function () {
    return (React.createElement("main", { className: "min-h-screen bg-[#050816] text-white flex items-center justify-center" },
        React.createElement("div", { className: "pb-20 grid md:grid-cols-3 gap-6 " },
            React.createElement(progress_card_1.ProgressCard, null),
            React.createElement(conversation_card_1.ConversationCard, null),
            React.createElement(feedback_card_1.FeedbackCard, null))));
};
