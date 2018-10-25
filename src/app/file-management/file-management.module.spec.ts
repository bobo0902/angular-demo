import { FileManagementModule } from './file-management.module';

describe('FileManagementModule', () => {
  let fileManagementModule: FileManagementModule;

  beforeEach(() => {
    fileManagementModule = new FileManagementModule();
  });

  it('should create an instance', () => {
    expect(fileManagementModule).toBeTruthy();
  });
});
