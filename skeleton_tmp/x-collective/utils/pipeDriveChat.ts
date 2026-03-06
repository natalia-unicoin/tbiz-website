export const togglePipedriveWrapper = (
  state: 'hide' | 'show',
  queryNode = '#LeadboosterContainer',
) => {
  const chatWrapper = document.querySelector(queryNode);

  if (chatWrapper) {
    chatWrapper.setAttribute(
      'style',
      `height: 100px !important; ${state === 'hide' ? 'display: none !important' : ''}`,
    );
  }
};

export const removeDuplicatePipedriveWrapper = (queryNode = '#LeadboosterContainer') => {
  const collectionOfNode = document.querySelectorAll(queryNode);

  if (collectionOfNode.length > 1) {
    collectionOfNode[0].remove();
  }
};
