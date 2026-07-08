import { useState } from 'react';
import '../css/LumiAI.css';
import '../css/FloatingChat.css';

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-chat-container">
      {isOpen ? (
        <aside className="chat-sidebar glass-panel soft-glow floating-chat-box">
          <div className="chat-header">
            <div className="chat-title-group">
              <div className="chat-icon ethereal-gradient">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
              </div>
              <div>
                <h2 className="chat-title">Lumi AI Stylist</h2>
                <span className="chat-subtitle">Powered by Rasa</span>
              </div>
            </div>
            <div className="chat-actions">
              <button className="chat-action-btn" onClick={() => setIsOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>

          <div className="chat-body">
            <div className="chat-msg-left">
              <div className="chat-bubble-ai">
                <p className="chat-text-ai">
                  Welcome to the Atelier. I am here to curate a wardrobe that mirrors your essence.
                </p>
              </div>
              <span className="chat-time">10:42 AM</span>
            </div>

            <div className="chat-msg-left-options">
              <div className="chat-bubble-ai-2">
                <p className="chat-text-ai-2">
                  Tell me about your typical day. Are we looking for <span className="highlight">active support</span> or <span className="highlight">effortless comfort</span>?
                </p>
              </div>
              <div className="chat-options">
                <button className="chat-option-btn">
                  Active Support
                </button>
                <button className="chat-option-btn">
                  Effortless Comfort
                </button>
                <button className="chat-option-btn">
                  Transitioning Both
                </button>
              </div>
            </div>

            <div className="chat-msg-right">
              <div className="chat-bubble-user ethereal-gradient">
                <p className="chat-text-user">
                  I'm looking for something for my morning yoga and then back-to-back studio meetings.
                </p>
              </div>
              <span className="chat-time">10:45 AM</span>
            </div>
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <input className="chat-input" placeholder="Describe your aesthetic..." type="text" />
              <button className="chat-submit-btn">
                <span className="material-symbols-outlined">north</span>
              </button>
            </div>
            <p className="chat-disclaimer">Consult with AI for a Bespoke Experience</p>
          </div>
        </aside>
      ) : (
        <button className="floating-chat-button" onClick={() => setIsOpen(true)}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
        </button>
      )}
    </div>
  );
}

export default FloatingChat;
