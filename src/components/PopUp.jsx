/* eslint-disable no-duplicate-case */
import React from "react";
// Seus imports (CloseSvg, etc.) podem não ser todos necessários aqui
// a menos que usados como fallback, mas mantenha o que for preciso.

/**
 * Bloco de Meta-informações (Criado por, Data, etc.)
 * Movido para um sub-componente para limpar o código principal.
 */
const MetaBlock = ({ createdBy, date, client, category }) => (
  <div className="corporate_main">
    {createdBy && (
      <div className="cuberto_main">
        <p className="created_by">Created By:</p>
        <p className="cuberto">{createdBy}</p>
      </div>
    )}
    {date && (
      <div className="cuberto_main">
        <p className="created_by">Date:</p>
        <p className="cuberto">{date}</p>
      </div>
    )}
    {client && (
      <div className="cuberto_main">
        <p className="created_by">Client:</p>
        <p className="cuberto">{client}</p>
      </div>
    )}
    {category && (
      <div className="cuberto_main">
        <p className="created_by">Categories:</p>
        <p className="cuberto">{category}</p>
      </div>
    )}
  </div>
);

const MetaBlock2 = ({ Genre, audience, platforms, category }) => (
    <div className="corporate_main">
        {Genre && (
            <div className="cuberto_main">
                <p className="created_by">Genre:</p>
                <p className="cuberto">{Genre}</p>
            </div>
        )}
        {audience && (
            <div className="cuberto_main">
                <p className="created_by">Target Audience:</p>
                <p className="cuberto">{audience}</p>
            </div>
        )}
        {platforms && (
            <div className="cuberto_main">
                <p className="created_by">Platforms:</p>
                <p className="cuberto">{platforms}</p>
            </div>
        )}
        {/* Você pode adicionar mais campos aqui como Role, Budget, etc. */}
    </div>
);

const renderHtmlContent = (content) => ({ __html: content });

/**
 * O componente Popup principal
 * Agora ele recebe 'contentBlocks' e ignora as props antigas.
 */
const Popup = ({ isVisible, onClose, contentBlocks = [] }) => {
  // Função helper para renderizar um bloco individual
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'header':
        return <p key={index} className="corpo">{block.text}</p>;
      case 'subheader':
        return <p key={index} className="corpo-sub">{block.text}</p>;
      case 'paragraph':
        return <p key={index} className="Ornare">{block.text}</p>;
      case 'image':
        return (
          <img
            key={index}
            className="pop-up-img" // Uma classe genérica para todas as imagens
            src={block.src}
            alt={block.alt || 'Imagem do projeto'}
            style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} // Adicionei um estilo básico
          />
        );
      case 'video':
        return (
          <div key={index} className="modal-content" style={{ marginBottom: '1rem' }}>
            <iframe
              src={block.url}
              width="100%" // Alterado para responsivo
              height="360" // Você pode ajustar ou usar aspect-ratio no CSS
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        );
      case 'meta':
        // Passa todas as propriedades do bloco 'meta' para o componente MetaBlock
            return <MetaBlock key={index} {...block} />;
        case 'meta2':
            // Passa todas as propriedades do bloco 'meta' para o componente MetaBlock
            return <MetaBlock2 key={index} {...block} />;

        // Dentro do seu Popup.jsx, no switch/case:
        case 'paragraph2':
            return (
                <div key={index} className="paragraph-container">
                    {/* 1. Renderiza o texto principal com HTML ativado */}
                    <p
                        className="Ornare"
                        key={`${index}-text`}
                        dangerouslySetInnerHTML={renderHtmlContent(block.text)}
                    />

                    {/* 2. Verifica se há itens de lista aninhada (bulletItems) */}
                    {block.bulletItems && block.bulletItems.length > 0 && (
                        <ul className="bullet-list-style">
                            {block.bulletItems.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    // Renderiza cada item da lista (<li>) com HTML ativado
                                    dangerouslySetInnerHTML={renderHtmlContent(item.text)}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            );
        // Dentro do seu Popup.jsx, no switch/case:
        case 'paragraph3':
            return (
                <div key={index} className="paragraph-container">
                    {/* 1. Renderiza o texto principal com HTML ativado */}
                    <p
                        className="OrnareCustom"
                        key={`${index}-text`}
                        dangerouslySetInnerHTML={renderHtmlContent(block.text)}
                    />

                    {/* 2. Verifica se há itens de lista aninhada (bulletItems) */}
                    {block.bulletItems && block.bulletItems.length > 0 && (
                        <ul className="bullet-list-style">
                            {block.bulletItems.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    // Renderiza cada item da lista (<li>) com HTML ativado
                                    dangerouslySetInnerHTML={renderHtmlContent(item.text)}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            );
      default:
        return null;
    }
  };

  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <a className="close-btn popup-close" href="#" onClick={onClose}>
          {/* Seu SVG de fechar aqui */}
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.16998 14.83L14.83 9.17004" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.83 14.83L9.16998 9.17004" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
          </svg>
        </a>

        {/* Aqui está a mágica: 
          Fazemos um loop no 'contentBlocks' e renderizamos cada um
          usando nossa função 'renderBlock'.
          Adicionei uma div 'popup-content-scrollable' para o caso
          de o conteúdo ser muito longo.
        */}
        <div className="popup-content-scrollable">
          {contentBlocks.map((block, index) => renderBlock(block, index))}
        </div>

      </div>
    </div>
  );
};


export default Popup;