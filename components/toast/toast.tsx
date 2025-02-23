import { Toast as TamaguiToast, useToastController, useToastState } from '@tamagui/toast';
import { YStack } from 'tamagui';

export const Toast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <TamaguiToast
      key={currentToast.id}
      duration={2000}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="100ms"
      viewportName={currentToast.viewportName}
    >
      <YStack>
        <TamaguiToast.Title>{currentToast.title}</TamaguiToast.Title>
        {!!currentToast.message && <TamaguiToast.Description>{currentToast.message}</TamaguiToast.Description>}
      </YStack>
    </TamaguiToast>
  );
};
