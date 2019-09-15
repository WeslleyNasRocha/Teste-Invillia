import { useEffect, useState } from 'react';
import {
  Permission,
  PermissionsAndroid,
  PermissionStatus,
  Platform,
} from 'react-native';

export default function usePermission(Permission: Permission): boolean | null {
  const [status, setStatus] = useState(false);

  /**
   * Manage user permission to location
   */
  useEffect(() => {
    const checkPermission = async () => {
      let result: PermissionStatus;

      if (Platform.OS === 'android') {
        result = await PermissionsAndroid.request(Permission, {
          title: 'Permissão de uso do GPS',
          message:
            'É necessário o uso do GPS para mostrar os estabelecimentos mais próximos à você',
          buttonPositive: 'Ok',
        });
      } else {
        result = 'granted';
      }
      setStatus(result === 'granted');
    };
    checkPermission();
  });

  return status;
}
