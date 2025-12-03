'use client';

import React, { useState } from 'react';
import {
  Button,
  Form,
  FormHeader,
  FormRow,
  FormFooter,
  TextField,
  Textarea,
  Checkbox,
  Modal,
  Flex,
  Text,
  RadioGroup,
  RadioButton,
  Select,
  Tabs,
  Badge,
  Tag,
  Switch,
  Toast,
  Menu,
  SearchField,
  Link,
  Heading,
} from '@superhuman/origin';

interface OriginPreviewProps {
  components: string[];
}

export function OriginPreview({ components }: OriginPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [radioValue, setRadioValue] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(true);

  // Landing page with form + modal
  if (components.includes('form') && components.length > 1) {
    const hasTextarea = components.includes('textarea');
    const hasCheckbox = components.includes('checkbox');
    const hasModal = components.includes('modal');

    return (
      <div className="p-6 bg-white rounded-lg">
        <Form onSubmit={(e) => {
          e.preventDefault();
          if (hasModal) setIsModalOpen(true);
        }}>
          <FormHeader
            heading="Get Started"
            description="Fill out the form below to continue"
          />
          {hasTextarea && (
            <FormRow>
              <Textarea
                label="Your Message"
                placeholder="Tell us more..."
              />
            </FormRow>
          )}
          {hasCheckbox && (
            <FormRow>
              <Checkbox>
                I agree to the terms and conditions
              </Checkbox>
            </FormRow>
          )}
          <FormFooter>
            <Button type="submit" text="Submit Form" />
          </FormFooter>
        </Form>

        {hasModal && (
          <Modal
            title="Success!"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            width="small"
          >
            <Modal.Body>
              <Text as="p">Your form has been submitted successfully.</Text>
            </Modal.Body>
            <Modal.Footer>
              <Flex gap={3} justify="end" width="100%">
                <Button
                  variant="tertiary"
                  text="Close"
                  onClick={() => setIsModalOpen(false)}
                />
                <Button text="Continue" onClick={() => setIsModalOpen(false)} />
              </Flex>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }

  // Form with fields
  if (components.includes('form')) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <Form onSubmit={() => alert('Saved!')}>
          <FormHeader heading="Settings" />
          <FormRow>
            <TextField label="First name" />
            <TextField label="Last name" />
          </FormRow>
          <FormRow>
            <RadioGroup
              legend="Contact preference"
              helperMessage="Used for product notifications and marketing"
              layout="row"
            >
              <RadioButton value="emails">Emails only</RadioButton>
              <RadioButton value="text">Texts only</RadioButton>
              <RadioButton value="both">Emails and texts</RadioButton>
            </RadioGroup>
          </FormRow>
          <FormFooter>
            <Button type="submit" text="Save" />
            <Button text="Cancel" variant="tertiary" />
          </FormFooter>
        </Form>
      </div>
    );
  }

  // TextField + Button
  if (components.includes('textfield') && components.includes('button')) {
    return (
      <div className="p-6 bg-white rounded-lg">
        <Flex gap={4} align="end">
          <TextField
            label="Search"
            value={textValue}
            onChange={setTextValue}
            placeholder="Type something..."
          />
          <Button
            text="Submit"
            onClick={() => console.log('Submitted:', textValue)}
          />
        </Flex>
      </div>
    );
  }

  // Single components
  if (components.length === 1) {
    const component = components[0];

    if (component === 'button') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex gap={4}>
            <Button text="Primary" />
            <Button variant="ghost" text="Ghost" />
            <Button variant="secondary" text="Secondary" />
            <Button variant="tertiary" text="Tertiary" />
          </Flex>
        </div>
      );
    }

    if (component === 'textfield') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <TextField
            label="First name"
            helperMessage="Enter your first name"
          />
        </div>
      );
    }

    if (component === 'textarea') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Textarea
            label="Comments"
            placeholder="Enter your comments..."
            helperMessage="Share your thoughts"
          />
        </div>
      );
    }

    if (component === 'checkbox') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Checkbox helperMessage="Not suggested on public computers">
            Remember me
          </Checkbox>
        </div>
      );
    }

    if (component === 'modal') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Button
            text="Open Modal"
            onClick={() => setIsModalOpen(true)}
          />

          <Modal
            title="Example Modal"
            description="This is a description of the modal"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            width="small"
          >
            <Modal.Body>
              <Text as="p" variant="text-small">
                Content goes in the body of the Modal.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Flex gap={3} justify="end" width="100%">
                <Button
                  variant="tertiary"
                  text="Cancel"
                  onClick={() => setIsModalOpen(false)}
                />
                <Button
                  text="Confirm"
                  onClick={() => setIsModalOpen(false)}
                />
              </Flex>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }

    if (component === 'select') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Select label="Sort by">
            <Select.Option value="name" label="Name" />
            <Select.Option value="count" label="Count" />
            <Select.Option value="date" label="Date" />
          </Select>
        </div>
      );
    }

    if (component === 'tabs') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Tabs>
            <Tabs.TabList accessibilityLabel="Settings">
              <Tabs.Tab id="profile" label="Profile" />
              <Tabs.Tab id="password" label="Password" />
              <Tabs.Tab id="notifications" label="Notifications" />
            </Tabs.TabList>
            <Tabs.Panel id="profile">
              <Text as="p">Profile settings content goes here</Text>
            </Tabs.Panel>
            <Tabs.Panel id="password">
              <Text as="p">Password settings content goes here</Text>
            </Tabs.Panel>
            <Tabs.Panel id="notifications">
              <Text as="p">Notification preferences go here</Text>
            </Tabs.Panel>
          </Tabs>
        </div>
      );
    }

    if (component === 'badge') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex gap={3}>
            <Badge
              variant="neutral"
              count={10}
              getAriaLabelText={(count) => `${count} suggestions`}
            />
            <Badge
              variant="premium"
              count={5}
              getAriaLabelText={(count) => `${count} notifications`}
            />
          </Flex>
        </div>
      );
    }

    if (component === 'tag') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex gap={2}>
            <Tag label="Your rules" />
            <Tag label="Featured" variant="premium" />
            <Tag label="Completed" variant="success" />
          </Flex>
        </div>
      );
    }

    if (component === 'switch') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Switch
            label="Enable feature"
            checked={switchEnabled}
            onChange={setSwitchEnabled}
          />
        </div>
      );
    }

    if (component === 'radiogroup') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <RadioGroup
            legend="Visibility"
            value={radioValue}
            onChange={setRadioValue}
          >
            <RadioButton value="all">All websites</RadioButton>
            <RadioButton value="select">Select websites</RadioButton>
            <RadioButton value="none">No websites</RadioButton>
          </RadioGroup>
        </div>
      );
    }

    if (component === 'toast') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex direction="column" gap={3}>
            <Button
              text="Show Toast"
              onClick={() => setShowToast(true)}
            />
            {showToast && (
              <Toast
                text="Saved successfully"
                variant="success"
                onClose={() => setShowToast(false)}
              />
            )}
          </Flex>
        </div>
      );
    }

    if (component === 'tooltip') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Button text="Hover me" title="This is helpful text that appears on hover" />
        </div>
      );
    }

    if (component === 'menu') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Menu activator="more-vertical">
            <Menu.Item key="copy">Copy</Menu.Item>
            <Menu.Item key="paste">Paste</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
          </Menu>
        </div>
      );
    }

    if (component === 'searchfield') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <SearchField
            label="Search"
            placeholder="Search images"
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
      );
    }

    if (component === 'link') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex direction="column" gap={2}>
            <Link href="/help">Visit help center</Link>
            <Link href="https://grammarly.com" target="_blank">External link</Link>
          </Flex>
        </div>
      );
    }

    if (component === 'heading') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex direction="column" gap={3}>
            <Heading as="h1" variant="heading-large">Page Title</Heading>
            <Heading as="h2" variant="heading-medium">Section Heading</Heading>
            <Heading as="h3" variant="heading-small">Subsection</Heading>
          </Flex>
        </div>
      );
    }

    if (component === 'text') {
      return (
        <div className="p-6 bg-white rounded-lg">
          <Flex direction="column" gap={2}>
            <Text as="p">This is body text using the Text component.</Text>
            <Text as="span" variant="text-small">Small text variant</Text>
            <Text as="label" variant="text-small">Label text</Text>
          </Flex>
        </div>
      );
    }
  }

  // Default: Basic form
  return (
    <div className="p-6 bg-white rounded-lg">
      <Form onSubmit={() => console.log('Submitted')}>
        <FormHeader heading="Contact Form" />
        <FormRow>
          <TextField label="Name" />
        </FormRow>
        <FormRow>
          <TextField label="Email" type="email" />
        </FormRow>
        <FormFooter>
          <Button type="submit" text="Submit" />
        </FormFooter>
      </Form>
    </div>
  );
}

