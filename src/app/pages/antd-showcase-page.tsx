import {
   Tag,
   Card,
   Form,
   Tabs,
   Badge,
   Input,
   Modal,
   Radio,
   Space,
   Table,
   Alert,
   Avatar,
   Select,
   Switch,
   Button,
   Divider,
   message,
   Progress,
   Checkbox,
   Typography,
   DatePicker,
   InputNumber,
   notification,
} from 'antd';

import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';
import type { ColumnsType } from 'antd/es/table';
import { formatJalali, JALALI_DATE_FORMAT } from '@/shared/lib/jalali';

type SampleRow = {
   key: string;
   sku: string;
   name: string;
   stock: number;
   status: 'inStock' | 'low' | 'out';
};

const { RangePicker } = DatePicker;
const { Title, Paragraph, Text } = Typography;

export default function AntdShowcasePage() {
   const { t } = useTranslation();
   const [modalOpen, setModalOpen] = useState(false);
   const [switchOn, setSwitchOn] = useState(true);
   const [pickedDate, setPickedDate] = useState<Dayjs | null>(null);
   const [pickedRange, setPickedRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);

   const columns: ColumnsType<SampleRow> = [
      { title: t('uiKit.table.name'), dataIndex: 'name', key: 'name' },
      { title: t('uiKit.table.sku'), dataIndex: 'sku', key: 'sku' },
      { title: t('uiKit.table.stock'), dataIndex: 'stock', key: 'stock', align: 'center' },
      {
         title: t('uiKit.table.status'),
         dataIndex: 'status',
         key: 'status',
         render: (status: SampleRow['status']) => {
            const color = status === 'inStock' ? 'success' : status === 'low' ? 'warning' : 'error';
            return <Tag color={color}>{t(`uiKit.status.${status}`)}</Tag>;
         },
      },
   ];

   const rows: SampleRow[] = [
      { key: '1', name: t('uiKit.sample.row1'), sku: 'MP-1042', stock: 48, status: 'inStock' },
      { key: '2', name: t('uiKit.sample.row2'), sku: 'MP-2088', stock: 6, status: 'low' },
      { key: '3', name: t('uiKit.sample.row3'), sku: 'MP-3310', stock: 0, status: 'out' },
   ];

   return (
      <div className="flex flex-col gap-4">
         <Alert type="info" showIcon message={t('uiKit.intro')} />

         <Card title={t('uiKit.sections.actions')}>
            <Space wrap>
               <Button type="primary">{t('uiKit.actions.primary')}</Button>
               <Button>{t('uiKit.actions.default')}</Button>
               <Button type="dashed">{t('uiKit.actions.dashed')}</Button>
               <Button type="link">{t('uiKit.actions.link')}</Button>
               <Button
                  type="primary"
                  onClick={() => {
                     void message.success(t('uiKit.toast.saved'));
                  }}
               >
                  {t('uiKit.actions.message')}
               </Button>
               <Button
                  onClick={() => {
                     notification.info({
                        message: t('uiKit.toast.notifyTitle'),
                        description: t('uiKit.toast.notifyBody'),
                        placement: 'topLeft',
                     });
                  }}
               >
                  {t('uiKit.actions.notify')}
               </Button>
               <Button type="primary" ghost onClick={() => setModalOpen(true)}>
                  {t('uiKit.actions.modal')}
               </Button>
            </Space>
         </Card>

         <Card title={t('uiKit.sections.form')}>
            <Form layout="vertical" className="max-w-xl" requiredMark={false}>
               <Form.Item label={t('uiKit.form.productName')} name="name" rules={[{ required: true }]}>
                  <Input placeholder={t('uiKit.form.productNamePlaceholder')} />
               </Form.Item>
               <Form.Item label={t('uiKit.form.category')} name="category">
                  <Select
                     options={[
                        { value: 'skin', label: t('uiKit.form.categories.skin') },
                        { value: 'hair', label: t('uiKit.form.categories.hair') },
                        { value: 'makeup', label: t('uiKit.form.categories.makeup') },
                     ]}
                     placeholder={t('uiKit.form.categoryPlaceholder')}
                  />
               </Form.Item>
               <Form.Item label={t('uiKit.form.price')} name="price">
                  <InputNumber className="w-full!" min={0} placeholder={t('uiKit.form.pricePlaceholder')} />
               </Form.Item>
               <Form.Item label={t('uiKit.form.notes')} name="notes">
                  <Input.TextArea rows={3} placeholder={t('uiKit.form.notesPlaceholder')} />
               </Form.Item>
               <Form.Item name="featured" valuePropName="checked">
                  <Checkbox>{t('uiKit.form.featured')}</Checkbox>
               </Form.Item>
               <Form.Item label={t('uiKit.form.visibility')} name="visibility" initialValue="public">
                  <Radio.Group>
                     <Radio value="public">{t('uiKit.form.public')}</Radio>
                     <Radio value="draft">{t('uiKit.form.draft')}</Radio>
                  </Radio.Group>
               </Form.Item>
               <Form.Item label={t('uiKit.form.active')}>
                  <Switch checked={switchOn} onChange={setSwitchOn} />
               </Form.Item>
               <Button type="primary" htmlType="submit">
                  {t('uiKit.form.submit')}
               </Button>
            </Form>
         </Card>

         <Card title={t('uiKit.sections.jalali')}>
            <Alert className="mb-4" type="success" showIcon message={t('uiKit.jalali.hint')} />
            <div className="flex max-w-xl flex-col gap-4">
               <div className="flex flex-col gap-2">
                  <Text strong>{t('uiKit.jalali.single')}</Text>
                  <DatePicker
                     className="w-full"
                     format={JALALI_DATE_FORMAT}
                     placeholder={t('uiKit.form.datePlaceholder')}
                     value={pickedDate}
                     onChange={setPickedDate}
                  />
                  {pickedDate ? (
                     <Text type="secondary">{t('uiKit.jalali.selected', { date: formatJalali(pickedDate) })}</Text>
                  ) : null}
               </div>
               <div className="flex flex-col gap-2">
                  <Text strong>{t('uiKit.jalali.range')}</Text>
                  <RangePicker
                     className="w-full"
                     format={JALALI_DATE_FORMAT}
                     placeholder={[t('uiKit.jalali.rangeStart'), t('uiKit.jalali.rangeEnd')]}
                     value={pickedRange}
                     onChange={(range) => setPickedRange(range)}
                  />
                  {pickedRange?.[0] && pickedRange[1] ? (
                     <Text type="secondary">
                        {t('uiKit.jalali.selectedRange', {
                           from: formatJalali(pickedRange[0]),
                           to: formatJalali(pickedRange[1]),
                        })}
                     </Text>
                  ) : null}
               </div>
            </div>
         </Card>

         <Card title={t('uiKit.sections.data')}>
            <Table<SampleRow> columns={columns} dataSource={rows} pagination={false} size="middle" />
         </Card>

         <Card title={t('uiKit.sections.feedback')}>
            <Tabs
               items={[
                  {
                     key: 'tags',
                     label: t('uiKit.tabs.tags'),
                     children: (
                        <Space wrap>
                           <Tag color="magenta">{t('uiKit.tags.new')}</Tag>
                           <Tag color="gold">{t('uiKit.tags.sale')}</Tag>
                           <Tag color="green">{t('uiKit.tags.ready')}</Tag>
                           <Badge count={5}>
                              <Avatar shape="square" size="large" className="bg-(--color-primary)!">
                                 {t('shell.brand').charAt(0)}
                              </Avatar>
                           </Badge>
                        </Space>
                     ),
                  },
                  {
                     key: 'progress',
                     label: t('uiKit.tabs.progress'),
                     children: (
                        <div className="flex max-w-md flex-col gap-3">
                           <Progress percent={72} />
                           <Progress percent={48} status="active" />
                           <Progress percent={100} />
                        </div>
                     ),
                  },
                  {
                     key: 'copy',
                     label: t('uiKit.tabs.copy'),
                     children: (
                        <>
                           <Title level={4}>{t('uiKit.copy.title')}</Title>
                           <Paragraph type="secondary">{t('uiKit.copy.body')}</Paragraph>
                           <Text code>colorPrimary · Rose Atelier</Text>
                        </>
                     ),
                  },
               ]}
            />
         </Card>

         <Divider className="my-1!" />

         <Modal
            title={t('uiKit.modal.title')}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            okText={t('uiKit.modal.ok')}
            cancelText={t('uiKit.modal.cancel')}
         >
            <Paragraph className="mb-0!">{t('uiKit.modal.body')}</Paragraph>
         </Modal>
      </div>
   );
}
