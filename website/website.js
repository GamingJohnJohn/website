class OpenWebsiteExtension {
  getInfo() {
    return {
      id: 'openwebsite',
      name: 'Open Website',
      blocks: [
        {
          opcode: 'openURL',
          blockType: Scratch.BlockType.COMMAND,
          text: 'open website [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com'
            }
          }
        }
      ]
    };
  }

  openURL(args) {
    const url = args.URL;
    if (url && typeof url === 'string') {
      window.open(url, '_blank');
    }
  }
}

Scratch.extensions.register(new OpenWebsiteExtension());
